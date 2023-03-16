require('dotenv').config()
const router=require("express").Router()
const Insta=require('instamojo-nodejs')
const url=require('url')


router.post("/pay",(req,res)=>{
    let redirect_url=""
    Insta.setKeys(process.env.API_KEY,process.env.AUTH_KEY);    
    const data=new Insta.PaymentData();
    Insta.isSandboxMode(true)    //it says we are using test environment.
    data.purpose=req.body.purpose;
    data.amount=req.body.amount;
    data.email=req.body.email;
    data.phone=req.body.phone;
    data.send_sms=true;
    data.send_email=false;
    data.setRedirectUrl(redirect_url);

    Insta.createPayment(data,(err,response)=>{
        if(err){

        }else{
            console.log(response)
            const json_data=JSON.parse(response);
            redirect_url=json_data.payment_request.longurl;  
            return res.redirect(redirect_url)
        }

    })
})

router.get('/callback',(req,res)=>{
    let url_parts=url.parse(req.url,true );
    console.log(url_parts)
    let responseData=url_parts.query;
    if(responseData.payment_id){
        console.log(responseData.payment_id);
        res.send("please visit next page since your payment is successfull")
    }

})

module.exports=router