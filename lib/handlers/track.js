'use strict'

const Kinesis = require('@heroku/kinesis')

const internals = {}

module.exports = (config, server) => {
  internals.config = config
  internals.server = server
  return internals.trackHandler
}

internals.trackHandler = (request, reply) => {
  reply().code(204)

  // On the next next tick (after replying), mutate and forward to kinesis
  process.nextTick(() => {
    // Mutate incoming event
    const eventToSend = internals.mutateEvent(request)

    // TODO: Send event to kinesis
  })
}

internals.mutateEvent = function mutateEvent (event) {
  return event  // TODO: something
}
