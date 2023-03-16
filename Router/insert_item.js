const router=require('express').Router()
const multer=require('multer')
const Items=require('../Models/items_models')
const fs=require('fs');
const path=require('path');
let Storage=multer.diskStorage({
    destination:'public/',
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now())
    }
})
let upload=multer({
    storage:Storage
})

router.get('/',async(req,res)=>{
    console.log("Inside get api call")
    const data=await Items.find({})
    return res.json({"message":'success',"data":data})
})

router.put('/',(req,res)=>{
    return res.json({"message":'hello'})
})

router.delete('/',(req,res)=>{
    return res.json({"message":'hello'})
})

router.post('/uploadFile',upload.single('image'),(req,res)=>{
    const obj = {
        userid:req.body.user_id,
        item_name:req.body.item_name,
        price:req.body.price,
        description:req.body.description,
        image: {
            data: fs.readFileSync(path.join(__dirname + '/../public/' + req.file.filename)),
            contentType: 'image/png'
        },
        quantity:req.body.quantity

    }
    const item=new Items(obj)
    item.save()
    .then(()=>{
        return res.json({"message":'successfully uploaded data to database'})
    })
    .catch((err)=>{
        return res.json({"message":"Not able to store the data into database"})
    })
    

   
})

module.exports=router