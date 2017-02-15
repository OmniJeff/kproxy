'use strict'

const Kinesis = require('@heroku/kinesis')

const internals = {}

module.exports = (config, server) => {
  internals.config = config
  internals.server = server
  return internals.listStreamsHandler
}

internals.listStreamsHandler = (request, reply) => {
  // Uses credentials from process.env by default
  Kinesis.listStreams({region: 'us-east-1', logger: internals.server}, function(err, streams) {
    if (err) {
      reply({ statusCode: 500 })
      throw err
    }

    internals.server.log(['info'], { streams: streams })

    reply(streams)
  })
}
