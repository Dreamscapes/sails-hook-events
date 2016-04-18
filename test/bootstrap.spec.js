/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const path = require('path')
const initialiser = require('../lib/events')
const server = require('sails')


before(function(done) {
  const config = {
    hooks: {
      events: initialiser,
      // Disable most of the core hooks as they play no role in the tests
      blueprints: false,
      controllers: false,
      cors: false,
      csrf: false,
      grunt: false,
      http: false,
      i18n: false,
      logger: false,
      policies: false,
      pubsub: false,
      request: false,
      responses: false,
      services: false,
      session: false,
      sockets: false,
      views: false
    },
    log: {
      level: 'error'
    },
    globals: {
      _: false,
      async: false,
      models: false
    },
    models: {
      connection: 'memory',
      migrate: 'alter'
    },
    connections: {
      memory: {
        adapter: 'sails-memory'
      }
    },
    paths: {
      models: path.join('.', 'test', 'models')
    }
  }

  server.load(config, done)
})

after(done => server.lower(done))
