export async function post(req, res, next) {
    /* Initializes */
    res.setHeader('Content-Type', 'application/json')
    /* Retrieves the data */
    var data = req.body
    fetch('#', {
        method: 'POST',
        body: data
        });
    /* Returns the result */
    return res.end(JSON.stringify({ success: true }))
  }