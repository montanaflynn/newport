var net = require('net')
var mocha = require('mocha')
var assert = require('assert')
var newport = require('./newport.js')

var server = net.createServer()
server.listen(4444, '127.0.0.1')

describe('a new port', function () {

  it('should be a number', function (done) {
    newport(function(err, port) {
      assert(typeof port === 'number')
      done()
    })
  })

  it('should not have an error', function (done) {
    newport(function(err, port) {
      assert(err === null)
      done()
    })
  })

  it('should not be 0', function (done) {
    newport(function(err, port) {
      assert(port !== 0)
      done()
    })
  })

  it('should not be over 65535', function (done) {
    newport(function(err, port) {
      assert(port < 65535)
      done()
    })
  })

})

describe('an existing port', function () {

  it('should throw an error if the port is already in use', function (done) {
    newport(4444, function(err, port) {
      assert(err.code === 'EADDRINUSE')
      done()
    })
  })

  it('should throw an error if the port is below 1024', function (done) {
    newport(80, function(err, port) {
      assert(err.code === 'EACCES')
      done()
    })
  })

  it('should throw an error if the callback is missing', function (done) {
    assert.throws(function() { newport(1337) }, Error, "Missing callback function");
    done()
  })

  it('should return the port number if it is available', function (done) {
    newport(8080, function(err, port) {
      assert(typeof port === 'number')
      assert(port === 8080)
      done()
    })
  })

})
