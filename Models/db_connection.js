const mongoose=require('mongoose')


function connection(){
    mongoose.connect("mongodb://localhost:27017/PaymentGateway",{})
    .then(()=>{
        console.log("Connected to DB!!!")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connection;