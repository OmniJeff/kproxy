'use strict'

module.exports = (config, server) => {
  server.route({
    method: 'GET',
    path: '/list-streams',
    handler: require('../handlers/list-streams')(config, server)
  })
}
