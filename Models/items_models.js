const mongoose=require('mongoose')


const item_schema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    item_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    image_id:[{
     img_id:String
    }
    ],
    quantity:{
        type:Number,
        required:true
    }

})

const ITEMS=mongoose.model('ITEMS',item_schema)
module.exports=ITEMS
