const dotenv = require('dotenv')
const express = require('express')
const cors = require("cors")
const connectDB = require('./config/db')
const route = require('./routes/authRoutes')
const conversationRoutes = require('./routes/conversationRoutes')
const chatRoutes = require('./routes/chats')

dotenv.config();
const app = express();


//first builtinmiddleware
app.use(cors());
//second builtinmiddleware
app.use(express.json());

//databaseconnectionon everyrequest is nenecessary
app.use(async(req,res , next)=>{
    await connectDB();
    next();
});


/*third custom middleware;
const meramiddleware = function (req , res ,next){
    console.log("this is my first custum middleware");
    next();
}*/
//app.use(meramiddleware);

//app.use('/api/auth' , Authroutes);
//app.use('/api/protected' , protectedRoutes);

app.use('/api', route);
app.use('/api' , chatRoutes);
app.use('/api' , conversationRoutes);

app.get('/' , (req,res)=>{
    res.send("good")
});

const Port = process.env.PORT || 5000 ;

app.listen(Port , ()=> console.log(`server is started at ${Port}`))