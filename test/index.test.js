const path = require('path')

const callGetCallerFilenameFromFixtures = require('./fixtures/callerOf_getCallerFilename')

const getCallerFilepath = require('../index')

test('should return the path of the file which calls it', function() {
  expect(
    getCallerFilepath()
  ).toMatch(
    /node_modules\/jest/
  )
})

test('should return the full path of the file which calls it', function() {
  expect(
    callGetCallerFilenameFromFixtures()
  ).toBe(
    __filename
  )
})
