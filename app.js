var express = require('express');

const bodyParser = require('body-parser')

const db = require('./utils/db')
const allRoutes = require('./allroutes');



const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.use("", allRoutes);



// CORS requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept,Authorization',
    );
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.listen(port, () => {
    console.log('test');
});