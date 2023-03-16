const mongoose=require('mongoose')

const schema=mongoose.Schema({
    object_id:{
        type:String
    },
    payment_id:{
        type:String
    },
    date:{
        type:String,
        default:Date.now()
    }
    
})

const P_DET=mongoose.model("P_DET",schema);
module.exports=P_DET;