'use strict'

module.exports = (config, server) => {
  server.route({
    method: 'GET',
    path: '/ping',
    handler: require('../handlers/ping')(config, server)
  })
}
