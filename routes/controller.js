//var print = require('./lib/build/Release/printNumber.node')
//	;

module.exports = {
	index: function(req, res) {
		res.render('index');
	},

	jsonOutput: function(req, res) {
		var root = {
			name: "Publisher",

			 children: [
			  {
			   name: "Topic1",
			   children: [
			    {name: "Node1", "size": 4116},
			    {name: "Node2", "size": 1336}
			   ]
			  },
			  {
			   name: "Topic2",
			   children: [
			    {name: "Node1", "size": 4116},
			    {name: "Node3", "size": 1336}
			   ]
			  },
			  {
			   name: "Topic3",
			   children: [
			    {name: "Node5", "size": 4116},
			    {name: "Node2", "size": 1336},
			    {name: "Node4", "size": 1336},
			    {name: "Node1", "size": 2336}
			   ]
			  },
			 ]
		};
		res.json(root);
	},

	jsonOutputParams: function(req, res) {
		var colors = ['red', 'green', 'yellow', 'magenta', 'brown'];

		var val = req.params['val'];

		var node = {
			name: "Node"+val,
			size: 1200
		}

		res.json(node);
	}
}