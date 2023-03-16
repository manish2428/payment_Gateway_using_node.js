const router=require('express').Router()
const USER=require('../Models/user_models')
const bcrypt=require('bcrypt')
const saltRounds=10




router.get('/',(req,res)=>{
    console.log("hlo")
})

router.post('/',async(req,res)=>{
    let user=new USER({
     name:req.body.name,
     email:req.body.email,
     phone:req.body.phone,
     address:req.body.address,
    })

    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(salt){
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if(hash){
            user.password=hash
            }
        });
        }
    });
    await user.save((err,user)=>{
        if(err){
            return res.status(500).json({"msg":err})
        }else{
             return res.status(200).json({"msg":user})
        }
    })
    

})

router.put('/',(req,res)=>{
    console.log("hlo")
})

router.delete('/',(req,res)=>{
    console.log("hlo")
})


module.exports=router
