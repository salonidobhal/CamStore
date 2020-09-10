const express= require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const cors = require('cors');
const app= express();
app.use(bodyParser.urlencoded({limit : '50mb' , extended:false}));
app.use(bodyParser.json({limit : '50mb'}));


mongoose.connect("mongodb://localhost:27017/Camera-Store", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("Connected to db");
});

mongoose.connection.on('error',()=>{
    console.log("ERROR AT MONGODB"+ error);
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.static('./uploads'));

app.use('/api/signUp', require('./routes/signUp'));
app.use('/api/signIn', require('./routes/signIn'));
app.use('/api/user', require('./routes/userInfo'));

module.exports = app ;