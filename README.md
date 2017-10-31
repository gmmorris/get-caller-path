# get-caller-path
Get the file name of the code which called you

# Usage
When building developer tools you often want to know which code called your current executing code.
This can be very useful if you wish, for example, to provide your user with the developer experience of writing their code as if it is relative to their own and then you need to infer the specifics from that in your own code.
For that you would need to know where the developer called you from.

## Example
```js
const fs = require('fs')
const path = require('path')
const getCallerRelativePath = require('get-caller-path')

module.exports = function loadFileAndDoStuffToIt(filePath, stuff) {
  const fileRelativePath = path.dirname(getCallerRelativePath())
  fs.readFile(`${fileRelativePath}/${filePath}`, function (err, data) {
    if (err) {
      throw err
    }
    stuff(data.toString())
  });
}
```

Obviously a simply "load file and apply a function to it" is a contrived example, but imagine you need to transpile that file and apply transofrmations to it before returning it to the caller? Now you can do that easily.
