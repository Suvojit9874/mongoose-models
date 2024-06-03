const mongoose = require('mongoose');
const product = require('./product');

const orderItems=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        default:1
    }
})



const ordersSchema=new mongoose.Schema({
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderPrice:{
        type:Number,
        default:0
    },
    orderItems:[orderItems],
    address:{
        type:String,
        requird:true
    },
    status:{
        type:String,
        enum:['PENDING',"CANCELLED","DELIVERED"],
        default:'PENDING'
    }
},{timestamps:true})

module.exports = mongoose.model('Orders',ordersSchema)