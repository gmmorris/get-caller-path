const stack  = require('callsite')

module.exports = function getCallerFile (){
  const [,,callerCallSite] = stack()
  if(callerCallSite) {
    return callerCallSite.getFileName()
  }
  throw new Error('The call site for this function has no call site of its own, no one called it.')
}