const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

// parse application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// panggil routes
let routes = require('./routes');
routes(app);

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});