const mongoose = require("mongoose");

const sha256 = require("js-sha256");
const jwt = require('jsonwebtoken');
const app = require('express')();
const User = require('./user');
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json

    app.get('/',(req,res)=>{
    res.send("Server is Running ");
})
const cors = require('cors');
app.use(cors({
    origin: '*',
}));

mongoose.connect("mongodb://localhost:27017/tourism",{
    useUnifiedTopology:true,
    useNewUrlParser:true
});

mongoose.connection.once("open",
    ()=>{
        console.log("Db is connected")
    })



app.use("/user",require("./routes/user"));

app.listen(8000,()=>{
    console.log("Server is Running at Port  8000");
});