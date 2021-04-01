const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex: true
    })
    console.log(`MongoDB Connected ${ conn.connection.host}`.rainbow.bold)
}


module.exports = connectDB;