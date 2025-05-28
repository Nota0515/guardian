const jwt = require('jsonwebtoken');
const User = require('../models/User');


//this will run every time to Aujthenticate user req and project the routes from miselaneus 3rd party req or unauthurised req

exports.protect = async (req , res , next ) => {
    let token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({message : "invalid token, unauthorised"});
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    }catch(err){
        res.status(401).json({message : "token Invalid or expires"});
    }
};