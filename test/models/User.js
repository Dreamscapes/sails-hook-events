/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

/**
 * A dummy user to test our events
 */
module.exports =
{ attributes:
  { username:
    { type: 'string'
    , required: true
    }
  }
}
