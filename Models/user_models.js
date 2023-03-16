const mongoose=require("mongoose")


const sch=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String
    }
})

const User=mongoose.model('User',sch)
module.exports=User
