const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require('jsonwebtoken');
const app = require('express')();

app.get('/',(req,res)=>{
    res.send("Server is Running ");
})

mongoose.connect("mongodb://localhost:27017/tourism",{});
mongoose.connection("open",
    ()=>{
        console.log("Db is connected")
    })

app.post('/user/login',async (req, res) => {
    const {email , password} = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password+process.env.SALT),
    });
    if(!user) throw "Email and Password did not match.";
    
   
     
    res.json({
        message: "User logged in successfully !",
    });


})

app.post('/user/register',async (req, res) => {
    const {name, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|yahoo|pes.edu|hotmail)\.com$/g;
    if (!emailRegex.test(email)) throw "Email is not supported from your domain.";
    if (password.length < 6) throw "Password must be atleast 6 characters length.";

    const userExists = await User.findOne({
        email,
        password,
    });

    if(userExists) throw "User with same email already exists."
    
    const user = new User({
        name,
        email,
        password
    });

    await user.save();
    res.json({
        message : "User ["+name +"] registered successfully",
    });
})

app.listen(8000,()=>{
    console.log("Server is Running at Port  8000");
});