const mongoose=require('mongoose')


const item_schema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        
    },
    item_name:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    image:{
        data: Buffer,
        contentType: String
    }
    ,
    quantity:{
        type:Number
    }

})

const ITEMS=mongoose.model('ITEMS',item_schema)
module.exports=ITEMS
