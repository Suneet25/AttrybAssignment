let express=require("express");
let mongoose=require("mongoose");


let UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{timestamps:true});

let UserModel=mongoose.model("user",UserSchema);

module.exports=UserModel;