const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database is connect")
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

module.exports = connectToDB; 