'use strict'

module.exports = (config, server) => {
  server.route({
    method: 'GET',
    path: '/track',
    handler: require('../handlers/track')(config, server)
  })
}
