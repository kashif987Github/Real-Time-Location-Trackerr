const mongoose = require("mongoose");

const crudSchema =new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    email:{
        type : String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("student",crudSchema);