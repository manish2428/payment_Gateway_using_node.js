const router=require('express').Router()
const USER=require('../Models/user_models')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
// const saltRounds=10  




router.post('/login',async(req,res)=>{
    
    let data=await USER.findOne({email:req.body.email});
    if(!data){
        return res.status(500).json({"msg":"Email doesnot exist"})
    }
    const token=jwt.sign({
        data: req.body.email,
        date:Date.now()
      },'secret', { expiresIn: '1h' });
   if(bcrypt.compareSync(req.body.password, data.password)){
      data.password="";
      console.log(token)
      return res.status(200).json({"data":data,"token":token})
   } 
   else{
    return res.status(401).json({"msg":"Invalid credentials"})
   }
    
})



router.post('/',async(req,res)=>{
    const salt = bcrypt.genSaltSync(Number(process.env.SALT));//generating salt value by providing salt rounds
    const hash = bcrypt.hashSync(req.body.password, salt);   //hashing the password
      
    let user=new USER({
     name:req.body.name,
     email:req.body.email,
     phone:req.body.phone,
     address:req.body.address,
     password:hash
    })
    user.save()
    .then(()=>{
        user.password="";
        res.status(200).json(user)
    })
    .catch((err)=>{
        res.status(500).json(err)
        })
    

})

router.put('/',(req,res)=>{
    console.log("hlo")
})

router.delete('/',(req,res)=>{
    console.log("hlo")
})


module.exports=router
