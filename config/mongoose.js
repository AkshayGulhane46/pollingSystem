// mongoose code for connnecting database with the server

const mongoose = require('mongoose');
mongoose.set('strictQuery',true)
mongoose.connect('mongodb://0.0.0.0:27017/pollingSystem');

const db = mongoose.connection;

db.on('err',console.error.bind(console, "error connection to DB"));

db.once('open',function(){
    console.log("connected to DB MONGO DB of Polling System")
})

module.exports = db;