/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const initialiser = require('../../lib/events')

describe('Initialiser', function() {
  it('should be a function', function() {
    initialiser.should.be.Function()
  })

  it('should export an object', function() {
    initialiser().should.be.Object()
  })


  describe('.initalize()', function() {
    let hook

    before(function() {
      hook = initialiser()
    })


    it('should exist', function() {
      hook.should.have.property('initialize').and.be.Function()
    })
  })
})
