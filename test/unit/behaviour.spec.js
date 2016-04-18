/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

describe('Behaviour', function() {
  let User

  before(function() {
    User = sails.models.user
  })


  it('model:created event', function(done) {
    sails.once('user:created', model => {
      model.should.have.property('username', 'Robert')

      return done()
    })

    User.create({ username: 'Robert' })
    .catch(done)
  })

  it('model:updated event', function(done) {
    sails.once('user:updated', model => {
      model.should.have.property('username', 'Trebor')

      return done()
    })

    User.update({ username: 'Robert' }, { username: 'Trebor' })
    .catch(done)
  })

  it('model:destroyed event', function(done) {
    sails.once('user:destroyed', model => {
      model.should.have.property('username', 'Trebor')

      return done()
    })

    User.destroy({ username: 'Trebor' })
    .catch(done)
  })
})
