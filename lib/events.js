/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = function modelEvents (app) {

  return {

    initialize (done) {

      app.after('hook:orm:loaded', () => {
        const events =
              { created: 'afterCreate'
              , updated: 'afterUpdate'
              , destroyed: 'afterDestroy'
              }

        // Loop through all models (model var is the model's name, not the actual object)
        for (const model of Object.keys(app.models))
          // Use the events map defined above to map an event to a model's lifecycle callback
          for (const event of Object.keys(events)) {
            // evt is in the format model:event, i.e. user:created
            const evt = `${model}:${event}`
                , method = events[event]

            // Start extending the models
            app.models[model]   // eslint-disable-line no-underscore-dangle
            // The _callbacks property contains all the functions that are to be called for each
            // particular lifecycle callback. This allows us to add more functionality to these
            // callbacks without ever touching existing functions defined on the models or
            // elsewhere. There is risk, however, because _callbacks appears to be internal property
            // of the model and thus could change with future versions of Waterline / Sails.
            ._callbacks[method]
            .push(setupEvent(app, evt))
          }
      })

      return done()
    }
  }
}

function setupEvent (emitter, event) {

  return function modelEvent (changes, done) {

    // Normalise... Some events emit an array of changed model objects so let's normalise everything
    // into an array and then loop through all of them and emit them one by one
    changes = changes instanceof Array ? changes : [ changes ]

    for (const change of changes)
      emitter.emit(event, change)

    return done()
  }
}
