const mongoose =require('mongoose')


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        trim:true
    }
})

module.exports =mongoose.model('User',userSchema)




