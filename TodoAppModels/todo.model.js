const mongoose =require('mongoose')


const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports =mongoose.model('Todo',todoSchema)




