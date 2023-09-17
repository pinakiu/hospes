const express = require("express");
const router = express.Router();
const passport = require("passport");
require("dotenv").config();

// Define the Facebook authentication route

router.post("/local",passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
  res.status(200).json(req.user)
})
router.get("/local/success", (req,res,next)=>{
    let a= req.user;
  if(req.user){
    a.password = undefined;
    res.status(200).json(req.user);
  }
  else{
    res.status(404).json(false);
  }
}
)

router.post("/logout", function(req, res, next) {
  req.logout();
  res.status(200).json({message:"Logged out"})
})
module.exports = router;