# sails-hook-events
#
# @author      Robert Rossmann <rr.rossmann@me.com>
# @copyright   2015 Robert Rossmann
# @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License

# Default - Run it all! (except for coveralls - that should be run only from Travis)
all: install lint test coverage

include targets/nodejs/base.mk
include targets/nodejs/install.mk
include targets/nodejs/lint.mk
include targets/nodejs/test.mk
include targets/nodejs/coverage.mk
include targets/nodejs/coveralls.mk

# Project-specific information
ghuser = Alaneor
lintfiles = lib test
testflags += --require should
testflags += --recursive
testflags += --no-exit
testflags += --globals sails,FILE_PARSER_LOGGER_ENABLED
