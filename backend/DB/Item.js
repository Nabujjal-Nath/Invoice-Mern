const mongoose=require('mongoose');
const item=new mongoose.Schema({
    desc:{type:String,required:true},
    quantity:{type:Number,required:true},
    unit_price:{type:Number,required:true},
    total:{type:Number,required:true}, 
});
module.exports=Item=mongoose.model('item',item);
// module.exports=item;