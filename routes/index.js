var app = require('express')
	, router = app.Router()
	, controller = require('./controller.js')
	;

router.get('/', controller.index);

router.get('/jsonOutput', controller.jsonOutput);

router.get('/jsonOutput/:val', controller.jsonOutputParams);

module.exports = router;