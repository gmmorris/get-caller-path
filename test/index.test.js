const resolvePath = require('resolve')

const getCallerPath = require('../index')
const callGetCallerFilenameFromFixtures = require('./fixtures/callerOf_getCallerFilename')

test('should return the path of the file which calls it', function() {
  expect(
    getCallerPath()
  ).toMatch(
    /node_modules\/jest/
  )
})

test('should return the path of the file which calls it', function() {
  expect(
    callGetCallerFilenameFromFixtures()
  ).toBe(
    __filename
  )
})