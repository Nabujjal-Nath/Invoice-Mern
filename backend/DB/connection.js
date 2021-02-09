const mongoose=require('mongoose');
const URI='mongodb+srv://dbase:Raven!@cluster0.nhok3.mongodb.net/raven?retryWrites=true&w=majority'
const connectDB=async()=>{
    await mongoose.connect(URI,{useUnifiedTopology:true, useNewUrlParser:true,useCreateIndex: true});
    console.log('database connected...')
};
module.exports=connectDB;
