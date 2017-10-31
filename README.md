# get-caller-path
Get the file name of the code which called you

# Usage
When building developer tools you often want to know which code called your current executing code.
This can be very useful if you wish, for example, to provide your user with the developer experience of writing their code as if it is relative to their own and then you need to infer the specifics from that in your own code.
For that you would need to know where the developer called you from.

## Usage

### main export
```js
/*
  This is your custom 'loadFileAndDoMagicalStuffToIt' module
*/
const fs = require('fs')
const path = require('path')
const getCallerFilename = require('get-caller-path')

const doSomeMagicalStuff = require('./doSomeMagicalStuff')

module.exports = function loadFileAndDoMagicalStuffToIt(filePath, done) {
  const callerFilename = getCallerFilename()
  
  console.log(`Asked to do magical stuff by file:${callerFilename}`)

  const fileRelativePath = path.dirname(callerFilename)
  fs.readFile(`${fileRelativePath}/${filePath}`, function (err, data) {
    if (err) {
      throw err
    }
    done(doSomeMagicalStuff(data.toString()))
  });
}
```

And then the developer using this can write:
```js
const loadFileAndDoMagicalStuffToIt = require('loadFileAndDoMagicalStuffToIt')

loadFileAndDoMagicalStuffToIt('./myProject/someJSONFile.json', function(magicalJSONFile){
  /// magicalJSONFile
})
```

Obviously a simply "load file and apply a function to it" is a contrived example, but imagine you need to transpile that file and apply transofrmations to it before returning it to the caller? Now you can do that easily.
