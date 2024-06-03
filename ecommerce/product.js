const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   productImage1:[{
    type:String,
    required:true
   }],
   price:{
    type:Number,
    required:true
   },
   stock:{
    type:Number,
    required:true,
    default:0
   },
   category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
   }

},{timestamps:true})

module.exports= mongoose.model('Product',productSchema)

