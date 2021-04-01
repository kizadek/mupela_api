const express = require("express");
const  dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const logger = require('./middelwares/logger');

// set were env file is 
dotenv.config({path:"./config/config.env"});

// connecting to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

// set morgan
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

// app.use(logger)

// Set proper Headers on Backend
app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    next();
});

//MOUNT ROUTES

app.use('/api/v1/Bootcomp',require('./routes/routes'));

const server = app.listen(PORT, console.log(`the server is runing in ${process.env.NODE_ENV} on port:${PORT}`.yellow.bold));

// unhundled promisses rejection
process.on('unhandledRejection',(err,promis)=>{
    console.log(`ERROR: ${err.message}`.bold);
 // close saver
 server.close(()=> process.exit(1));

})