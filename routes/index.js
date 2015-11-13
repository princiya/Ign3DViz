var app = require('express')
	, router = app.Router()
	, controller = require('./controller.js')
	;

router.get('/', controller.index);

router.get('/jsonOutput', controller.jsonOutput);

router.get('/jsonOutput/:val', controller.jsonOutputParams);

router.get('/printNumber/:val', controller.printNumber);

module.exports = router;