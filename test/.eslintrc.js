/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  env: {
    mocha: true
  },

  globals: {
    sails: true
  },

  rules: {
    // Account for main describe() block, nested describe() block and one it() block
    'max-nested-callbacks': [1, 7],
    // Mocha provides its own context (this) for the tests so let's not prevent that
    'prefer-arrow-callback': 0,
    // No jsdocs needed for test-related functions
    'require-jsdoc': 0,
    'func-names': 0
  }
}
