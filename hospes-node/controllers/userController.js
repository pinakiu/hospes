const asyncHandler = require('express-async-handler');
const User = require("../models/user")
const bcrypt = require('bcryptjs');

module.exports.postUser = asyncHandler(async (req, res) => {
    const {email, name, password, hostOrGuest} = req.body;  
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const user = new User({email, name, password:hashedPassword, hostOrGuest})
        const findUser = await User.findOne({email:email});
        if(!findUser)
        {
            await user.save();
            res.status(200).json({message:"User created"})
        }
        else {
            res.status(400).json({message:"User already exists"})
        }
      });
});

module.exports.postMore = asyncHandler(async (req, res) => {
    try {
        
        const files = req.files;
        console.log(files);
        // files is an array containing information about each uploaded file
        if (files.length !== 2) {
        return res.status(400).send('You must upload exactly two photos.');
        }
    
        // Your logic here to save the images or update the user information
    
        res.status(200).send('User info and photos updated successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
})