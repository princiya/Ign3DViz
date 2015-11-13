//var print = require('./lib/build/Release/printNumber.node')
//	;

module.exports = {
	index: function(req, res) {
		res.render('index');
	},

	jsonOutput: function(req, res) {
		var root = {
			name: "flare",

			 children: [
			  {
			   name: "flex",
			   children: [
			    {name: "FlareVis", "size": 4116},
			    {name: "GravityForce", "size": 1336}
			   ]
			  },
			  {
			   name: "vis",
			   children: [
			    {name: "DragForce", "size": 1082},
			    {name: "GravityForce", "size": 1336}
			   ]
			  },
			  {
			    name:"empty",
			    children: [
			      {
			        name: "one", "size": 1200
			      }
			    ]
			  }
			 ]
		};
		res.json(root);
	}
}