const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes')
routes(app)

app.listen(3002, () => {
    console.log('Server starter on port')
})
