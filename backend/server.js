const connectDB=require('./DB/connection');
var cors = require('cors')
const mongoose = require('mongoose');
const express=require('express');
const router= require('./Api/Item');
const app=express();
app.use(cors());
app.options('*', cors());
connectDB();
app.use(express.json({extended:false}))
app.use('/api/itemModel',require('./Api/Item'));
 app.use(router);

const Port=process.env.Port || 3000;
app.listen(Port, () => {
    console.log('Server is up at ' + Port);
})