const jwt=require('jsonwebtoken')

const verify=(req,res,next)=>{
    const authheader=req.headers.authorization
    const token=authheader.split(' ')[1]
jwt.verify(token, 'secret', function(err, decoded) {
    console.log("Account Verified") 
  });
  next()
}
module.exports=verify