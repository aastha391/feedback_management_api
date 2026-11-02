const mongoose=require('mongoose')
const feedbackSchema=new mongoose.Schema({
student:{
    type:String,
    required:true,
},
course:{
    type:String,
    required:true
},
message:{
    type:String,
    required:true
},
rating:{
    type:Number,
    min:1,
    max:5
},
reviewstatus:{
    type:String
}
})

module.exports=feedbackSchema;