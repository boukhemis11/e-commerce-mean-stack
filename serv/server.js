var express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();
var router = express.Router();

mongoose.connect(config.database, err =>{
    if(err){
        console.log(err)
    } else {
        console.log('connected to the database')
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');
app.use('/api/accounts', userRoutes);

app.listen(3030, (err) => {
    console.log('magic happen in port ' + config.serverport );
})