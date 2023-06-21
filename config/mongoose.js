const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/To_Do_List_Db');

const db = mongoose.connection;

db.on('error' , console.error.bind(console , "Connection Error !!"));

db.once('open' , function()
{
    console.log("Successfully Connected to Mongodb !");
})
