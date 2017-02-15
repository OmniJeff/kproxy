'use strict'

module.exports = {
  kinesisStub: {
    listStreams: (obj, cb) => {
      cb(new Error('uh-oh'))
    }
  }
}
