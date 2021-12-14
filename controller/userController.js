const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.register = async (req, res) => {
    const {name, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gmail|yahoo|pes.edu|hotmail)\.com$/g;
    if (!emailRegex.test(email)){ 
        res.json({
            message: "Email is not supported from your domain."
        })
   }
    if (password.length < 6) {
        res.json({
            message: "Password must be atleast 6 characters length."
        })
        
}

    const userExists = await User.findOne({
        email,
        password,
    });

 if(userExists){ 
        res.json({
            message: "User with same email already exists."
        })
        
}
else
{
    const user = new User({
        name,
        email,
        password
    });

    await user.save();
    res.json({
        message : "User "+name +" registered successfully",
    });
}

};

exports.login = async (req, res) => {
    const {email , password} = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if(!user){  
        res.json({
        message:"Email and Password did not match."
    })
}
    else
    { 
    res.json({
        message: "User logged in successfully !",
    });
}

};

