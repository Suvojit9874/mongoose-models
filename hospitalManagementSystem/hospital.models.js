const mongoose= require('mongoose')

const hospitalSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
    },
    city:{
        type:String,
        required:true  
    },
    pincode:{
        type:String,
        required:true
    },
    specialisedIn:[{
        type:String,
        // required:true
    }],
    
})

module.exports= mongoose.model('Hospital',hospitalSchema)