const mongoose = require('mongoose');

const  connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONG_URL,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true 
        } );
        console.log(`mongoDb connected: ${conn.connection.host}`)
}

module.exports = connectDB;