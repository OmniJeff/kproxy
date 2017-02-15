'use strict'

module.exports = {
  addRoutes: (config, server) => {
    require('./ping')(config, server)
    require('./track')(config, server)
    require('./list-streams')(config, server)
  }
}
