var net = require('net')

module.exports = function(port, cb) {

  // We just want a random port so skip port
  // and just send the callback function
  if (typeof port === 'function') {
    cb = port
    port = 0

  // Looks like you gave us a number so lets
  // validate that it's a proper port number
  } else if (typeof port === 'number' && port > 0 && port < 65535) {

    //Make sure our cb is actually a function
    if (typeof cb != 'function') {
      throw new Error("Missing callback function")
    }

  } else {
      throw new Error("Missing port and callback function")
  }

  // Create a server object that we can get
  // information regarding the ports from
  var server = net.createServer()

  // This is the first thing that fires with
  // the port so we grab it and shut it down
  server.on('listening', function() {
    port = server.address().port
    server.close()
  })

  // Once the server has shut down the port
  // can be considered free again so we send
  // back the port in the provided callback
  server.on('close', function() {
    cb(null, port)
  })

  // There was an error with the server so 
  // we check the error and act accordingly
  server.on('error', function(err) {
    return cb(err, null)
  })

  // Here's where we actually start the server
  // with either a 0 meaning give me a random
  // port or the number we want to test
  server.listen(port, '127.0.0.1')
}
