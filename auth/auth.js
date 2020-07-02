const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;

const UserModel = require('../models/userModel');

// handle user registration
passport.use('signup', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  nameField: 'name',

  passReqToCallback: true
}, async (req, email, password, userName, done) => {
  try {
    const { name } = req.body;
    const user = await UserModel.create({ email, password, userName});
    if(!user){
      return done(null,false,{message:'fuck'});
    }
    else{
      return done(null, user,{message:'signed up! noyce bitch!'});
    }
  } catch (error) {
    return done(error);
  }
}));

// handle user login
passport.use('login', new localStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }
    const validate = await user.isValidPassword(password);
    if (!validate) {
      return done(null, false, { message: 'Wrong Password' });
    }
    return done(null, user, { message: 'Logged in Successfully' });
  } catch (error) {
    return done(error);
  }
}));

// verify token is valid
passport.use(new JWTstrategy({
  secretOrKey: 'fds87LJ_=fwefw83lm.,?3jfhsd==-+_++fdfs3fmnl',
  jwtFromRequest: function (req) {
    let token = null;
    if (req && req.cookies) token = req.cookies['jwt'];
    return token;
  }
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}));