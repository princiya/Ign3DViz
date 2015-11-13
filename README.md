

# IgnD3Viz



## Usage

This is to visualize network topology for [ign-transport library](http://ignition-transport.readthedocs.org/en/latest/introduction/intro.html).

[Click here for a live demo of the project](http://128.199.132.0:7654)

  - This visualizes `publisher` node
  - The imediate inner circles represent topics
  - Subscriber nodes are clustered for a topic
  - Every 3 seconds, a new node subscribes to a topic
  - Subscriber nodes are color coded

## Developing

This is a Node.js project. 
  - cd to this directory and run `node app`
  - the `lib` directory contains native C++ code
  - the native code is referenced in `routes/controller.js`
  - `var print = require('./lib/build/Release/printNumber.node')`

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
