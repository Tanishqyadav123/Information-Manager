const mongoose = require("mongoose")

//  Designing the schema for the model :-
const UserSchema = new mongoose.Schema({
     name : {
         type : String,
         required : true
     },
     email : {
         type : String,
         required : true,
         unique : true
     },
     age : {
         type : Number,
     },
} , {timestamps : true})

module.exports = mongoose.model("User" , UserSchema);