const asyncHandler = require('express-async-handler');
const User = require("../models/user")
const bcrypt = require('bcryptjs');
require("dotenv").config()
module.exports.postUser = asyncHandler(async (req, res) => {
    const {email, name, password, hostOrGuest} = req.body;  
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        try
       { const user = new User({email, name, password:hashedPassword, hostOrGuest})
        const findUser = await User.findOne({email:email});
        if(!findUser)
        {
            await user.save();
            res.status(200).json({message:"User created"})
        }
        else {
            res.status(400).json({message:"User already exists"})
        }}
        catch(err) {
            console.log(err)
        }
      });
});

module.exports.postMore = asyncHandler(async (req, res) => {
      try {
        const updatedFields = req.body;
    
        // If files are uploaded, save their paths
        if (req.files) {
          if (req.files.homeImage) {
            updatedFields.homeImage = `${process.env.SELF}/${req.files.homeImage[0].path}`;
          }
          if (req.files.personImage) {
            updatedFields.personImage = `${process.env.SELF}/${req.files.personImage[0].path}`;
          }
        }
    
        const user = await User.findByIdAndUpdate(req.body.id, updatedFields, {
          new: true // This option returns the modified document
        });
    
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    
})
module.exports.getUser = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if(user){
        res.status(200).json(user);
    }else{
        res.status(400).json({message:"User not found"})
    }
})