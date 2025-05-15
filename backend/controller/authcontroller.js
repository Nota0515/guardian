const jwt = require('jsonwebtoken');
const User = require('../models/User');

//lets generate some token 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN)
}

//new user authenticaltion
exports.signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        const exist = await User.findOne({ email });
        if (exist) return res.json({ message: "User Already exist my friend" });
        const user = await User.create({email , password});
        res.status(201).json({token : generateToken(user._id)});
    } catch (error) {
        res.status(500).json({message:"server error"});
    }

};

//existing user authentication
exports.login = async (req, res) => {

}

