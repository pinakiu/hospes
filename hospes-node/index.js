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

const exampleUsers = [
    {
      email: "john.doe@example.com",
      password: "pass1234",
      name: "John Doe",
      hostOrGuest: "Host",
      first_time: true,
      origin: "Mexico",
      location: "New York City, NY",
      language: "English",
      price: 35,
      startDate: new Date('2023-11-01'),
      endDate: new Date('2024-02-01'),
      dietaryRestrictions: "Vegan",
      capacity: 2,
      homeImage: "",
      personImage: "avatar-url1",
      details: "Spacious place near Central Park.",
      gender: "Male",
      age: 30,
      rating: 4.5
    },
    {
      email: "jane.doe@example.com",
      password: "janePass",
      name: "Jane Doe",
      hostOrGuest: "Host",
      first_time: false,
      origin: "China",
      location: "San Francisco, CA",
      language: "Chinese",
      price: 50,
      startDate: new Date('2023-10-10'),
      endDate: new Date('2024-01-10'),
      dietaryRestrictions: "Vegetarian",
      capacity: 3,
      homeImage: "",
      personImage: "avatar-url2",
      details: "Modern apartment in a tech hub.",
      gender: "Female",
      age: 25,
      rating: 3.9
    },
    {
      email: "sam.smith@example.com",
      password: "samPass",
      name: "Sam Smith",
      hostOrGuest: "Host",
      first_time: true,
      origin: "India",
      location: "Chicago, IL",
      language: "Hindi",
      price: 60,
      startDate: new Date('2023-12-15'),
      endDate: new Date('2024-03-15'),
      dietaryRestrictions: "Halal",
      capacity: 1,
      homeImage: "",
      personImage: "avatar-url3",
      details: "Quiet space in downtown.",
      gender: "Other",
      age: 40,
      rating: 4.0
    },
    {
      email: "emily.jones@example.com",
      password: "emilyPass",
      name: "Emily Jones",
      hostOrGuest: "Host",
      first_time: false,
      origin: "Philippines",
      location: "Austin, TX",
      language: "Spanish",
      price: 25,
      startDate: new Date('2023-09-30'),
      endDate: new Date('2023-12-30'),
      dietaryRestrictions: "Gluten-Free",
      capacity: 4,
      homeImage: "",
      personImage: "avatar-url4",
      details: "Close to the University.",
      gender: "Female",
      age: 22,
      rating: 2.5
    },
    {
      email: "mike.brown@example.com",
      password: "mikePass",
      name: "Mike Brown",
      hostOrGuest: "Host",
      first_time: true,
      origin: "Vietnam",
      location: "Houston, TX",
      language: "Vietnamese",
      price: 45,
      startDate: new Date('2023-08-20'),
      endDate: new Date('2023-11-20'),
      dietaryRestrictions: "No Restrictions",
      capacity: 5,
      homeImage: "",
      personImage: "avatar-url5",
      details: "Family-friendly space.",
      gender: "Male",
      age: 50,
      rating: 5.0
    }
  ];
  
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
app.use(cookieParser());
app.use(session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: false,
}));
async function saveOne(user) {
    console.log(user[0])
    const newUser = new User(user[0]);
    await newUser.save();
}
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