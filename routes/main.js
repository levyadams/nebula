const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');

const tokenList = {};
const router = express.Router();

router.get('/status', (req, res, next) => {
  return res.status(200).json({ status: 'ok' });
});

// router.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {
//   res.status(200).json({ message: 'signup successful' });
// });
router.post('/signup', async (req, res, next) => {
  console.log(req);
  return next(res.status(200).json({ message: 'signup successful'}));
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err) {
        const error = new Error(err);
        return next(error);
      }
      if(!user){
      const error = new Error('no user');
        return next(error);

    }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = {
          _id: user._id,
          email: user.email
        };

        const token = jwt.sign({ user: body }, 'fds87LJ_=fwefw83lm.,?3jfhsd==-+_++fdfs3fmnl', { expiresIn: 300 });
        const refreshToken = jwt.sign({ user: body }, 'sfdkhfs3..<>-=4jfjskF#if/"{}[p.c3,fm3.3', { expiresIn: 86400 });

        // store tokens in cookie
        res.cookie('jwt', token);
        res.cookie('refreshJwt', refreshToken);

        // store tokens in memory
        tokenList[refreshToken] = {
          token,
          refreshToken,
          email: user.email,
          _id: user._id
        };

        //Send back the token to the user
        return res.status(200).json({ token, refreshToken });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post('/token', (req, res) => {
  const { refreshToken } = req.body;
  if (refreshToken in tokenList) {
    const body = { email: tokenList[refreshToken].email, _id: tokenList[refreshToken]._id };
    const token = jwt.sign({ user: body }, 'fds87LJ_=fwefw83lm.,?3jfhsd==-+_++fdfs3fmnl', { expiresIn: 300 });

    // update jwt
    res.cookie('jwt', token);
    tokenList[refreshToken].token = token;

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

router.post('/logout', (req, res) => {
  if (req.cookies) {
    const refreshToken = req.cookies['refreshJwt'];
    if (refreshToken in tokenList) delete tokenList[refreshToken]
    res.clearCookie('refreshJwt');
    res.clearCookie('jwt');
  }

  res.status(200).json({ message: 'logged out' });
});

module.exports = router;
