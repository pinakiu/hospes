const express=  require("express");
const app = express();
require("dotenv").config()
const port = process.env.PORT;
require("./auth/localAuth")
const passport = require('passport');
const mongoose = require("mongoose");
const cors = require("cors")
const session = require("cookie-session")
const cookieParser = require('cookie-parser');
const mongoDb = process.env.SECRET_KEY;
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")
const User = require("./models/user")
const {USERS} = require("./faker");
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
app.use(cookieParser());
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
}));
async function saveFakeUsers(usersArray){
    for(let i = 0; i < usersArray.length; i++) {
      const user = new User(usersArray[i]);
      const saveUser = await user.save();
      if(saveUser) {
        console.log("saved")
      }
  }}
saveFakeUsers(USERS);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize user by their ID
  });
  
passport.deserializeUser(async (id, done) => {
try {
    const user = await User.findOne({_id:id});
    done(null, user);
} catch (err) {
    console.log("ok")
    done(err, null);
}})

app.use(cors({
    origin: `${process.env.ORIGIN}`,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}))
app.use(express.json())
app.use("/users", userRouter)  
app.use("/auth", authRouter)
app.use('/uploads', express.static('uploads'));

  
app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on ${port}`);
})