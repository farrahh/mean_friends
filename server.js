
var bodyParser  = require('body-parser'),
    express     = require('express'),
    path        = require('path'),
    port        = require('./server/config/settings.js').port,
    app         = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

require(path.join(__dirname, './server/config/mongoose.js'));
require(path.join(__dirname, './server/config/routes.js'))(app);

app.listen(port, function() {
  console.log('Listening on port', port);
})
