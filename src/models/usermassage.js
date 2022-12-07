const mongoose = require("mongoose");
const validator = require("validator");

//creating schema
const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength:3
  },
  email:{
    type:String,
    required:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email Id");
      }
    }
  },
  phone:{
    type:Number,
    required:true,
    min:10
  },
  massage:{
    type:String,
    required:true,
    minLength:3
  },date:{
    type:Date,
    default:Date.now
  }
})

//we need to create a collection

const User = mongoose.model("User",userSchema);

module.exports = User;
