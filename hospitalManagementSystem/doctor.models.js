const mongoose= require('mongoose')

const doctorSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualifications:{
        type:String,
        required:true
    },
    expInYear:{
        type:Number,
        default:0
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }]
},{timestamps:true})

module.exports= mongoose.model('Doctor',doctorSchema)