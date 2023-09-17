const mongoose = require("mongoose");
const {Schema} = mongoose

const userSchema =  new Schema({
    email: {type:String, required:true},
    name: {type:String, required:true},
    password: {type:String, required:true},
    hostOrGuest: {type:String, required:true},
    first_time: {type:Boolean, default:true},
    capacity: {type:Number, default:0},
    details: {type:String, default:""},
    origin: { type: String, default: "" },
    location: { type: String, default: "" },
    language: { type: String, default: "" },
    price: { type: Number, default: 0 },
    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },
    dietaryRestrictions: { type: String, default: "" },
    capacity: { type: Number, default: 0 },
    homeImage: { type: String, default: "" },
    personImage: { type: String, default: "" },
    details: { type: String, default: "" },
  });
  
module.exports = mongoose.model("Users", userSchema);
  
  
  