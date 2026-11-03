const express=require('express')
const app=express()
const feedbackRoute = require('./Routes/feedbackroutes');

app.use(express.json());
app.use(feedbackRoute);
const mongoose=require('mongoose')

mongoose.connect('').then(()=>{
    console.log("MongoDB Connected")
}).catch((error)=>{
    console.log("MongoDb Not Connected")
})

app.listen(3000,()=>{
    console.log("Server started");
})
