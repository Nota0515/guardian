const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

//user ka boilerplate

const UserSchema = new mongoose.Schema({
    email : { type: String , required : true , unique : true},
    password : {type: String , required : true }
}, {timestamps :true})

//password ka protection bhi toh jaruri hai 
UserSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


//entered passward compare kero with the og passward 
UserSchema.methods.matchPassword = async function (entered){
    return await bcrypt.compare(entered, this.password )
}

module.exports = mongoose.model("User", UserSchema);