
/**
 * Module dependencies.
 */

var express = require('express')
  , controller = require('./routes/controller')
  , http = require('http')
  , path = require('path')
  , app = express()
  ;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  //console.log(print.Print(10));
});
