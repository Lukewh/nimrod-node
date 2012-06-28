# Nimrod-Node

The Nimrod-Node project provides an easy way to print Nimrod logs from Nodejs.
For more information about Nimrod see [http://sbtourist.github.com/nimrod/]

# Installation
  npm install nimrod-node
  
# Include
  var Nimrod = require('nimrod-node'),
    n = new Nimrod('/path/to/log/file.log');
    
# Methods
## n.logAlert(name, value, tags)
A wrapper for n.log().
Produces:
  [nimrod][123456789][alert][name][value][tags]

## n.logCounter(name, value, tags)
A wrapper for n.log().
Produces:
  [nimrod][123456789][counter][name][value][tags]

## n.logGauge(name, value, tags)
A wrapper for n.log().
Produces:
  [nimrod][123456789][gauge][name][value][tags]

## n.startTimer(name, tags)
A wrapper for n.log().
Produces:
  [nimrod][123456789][timer][name][start][tags]

## n.stopTimer(name)
A wrapper for n.log().
Produces:
  [nimrod][123456789][timer][name][stop]

## n.end()
Stops all timers that haven't been manually stopped.
Produces:
  [nimrod][123456789][timer][name][stop]

## n.log(metric, name, value, tags)
Produces:
  [nimrod][123456789][metric][name][value][tags]

# Feedback

For everything Nimrod-related, join the nimrod-user group: http://groups.google.com/group/nimrod-user

# License

Copyright (c) 2011-2012 Luke Wesley-Holley

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
