'use strict'

const internals = {}

module.exports = (config, server) => {
  internals.config = config
  internals.server = server
  return internals.pingHandler
}

internals.pingHandler = (request, reply) => {
  reply({ success: true })
}
