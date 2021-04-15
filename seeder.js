const fs = require('fs');
const  mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({path:'./config/config.env'});

//@ loald modles
const Bootcomp = require('./models/Bootcamp');

//@  connect to DB

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true
});

//@ read json file

const bootcomps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8'));

//@import data

const importData = async () =>{
    try {
        await Bootcomp.create(bootcomps);
        console.log('Data Imported....'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}


//@ delet Data

const deleteData = async () =>{
    try {
        await Bootcomp.deleteMany();
        console.log('Data Distroiyed...'.red.inverse);
        process.exit();
    } catch (err) {
         console.log(err);
    }
}




if(process.argv[2] === '-i'){ 
    importData();
}else if(process.argv[2]=='-d'){
    deleteData()
}else{
    console.log('comand not found');
}