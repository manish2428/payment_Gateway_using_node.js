const router=require('express').Router()


router.post('/',(req,res)=>{
    return res.json({message:'hello'})
})

router.get('/',(req,res)=>{
    return res.json({message:'hello'})
})

router.put('/',(req,res)=>{
    return res.json({message:'hello'})
})

router.delete('/',(req,res)=>{
    return res.json({message:'hello'})
})

module.exports=router