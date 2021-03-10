const express = require("express");
const  dotenv = require('dotenv');

dotenv.config({path:"./config/config.env"});

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`the server is runing in ${process.env.NODE_ENV} on port:${PORT}`));