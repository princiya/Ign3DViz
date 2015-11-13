

# IgnD3Viz


## Visualization Architecture

  - This is a web app written in Node.js
  - D3.js is used as the JavaScript visualization library
  - The client(browser front-end) makes AJAX calls to the server
  - The Node.js code (server) fetches data from C++ library and returns to the client
  - The client draws the new nodes (`subscriber`) and clusters them to a topic
  - Since the ignition transport library is in C++, we can still use the existing code and build beautiful visualizations for the network topology


## Usage

This is to visualize network topology for [ign-transport library](http://ignition-transport.readthedocs.org/en/latest/introduction/intro.html).

[Click here for a live demo of the project](http://128.199.132.0:7654)

  - This visualizes `publisher` node
  - The immediate inner circles represent `topics`
  - `Subscriber` nodes are clustered for a topic
  - Every 3 seconds, a new node subscribes to a topic
  - Subscriber nodes are color coded
  - On the right hand side, Node.js module refers to the C++ addon

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
