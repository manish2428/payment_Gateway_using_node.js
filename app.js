require("dotenv").config()
const express = require('express');
const app = express();
const cors=require("cors")
const verify=require('./MiddleWare/jwt_verify')
const payment=require('./Router/payment_gateway')
const DB_CONN=require('./Models/db_connection')
const signup=require('./Router/signup')
const items=require('./Router/insert_item')
DB_CONN()


app.use(express.json());
app.use(cors())
app.use('/payment',payment)
app.use('/signup',signup)
app.use('/items',items)

app.get("/",verify,(req,res)=>{
    res.send("Hello world")
});


app.listen(process.env.PORT || 3000,(err)=>{
if(!err){
    console.log(`Running on port ${process.env.PORT}`);
}else{
    console.log(err);
}
})