const express = require('express')
const cors = require("cors")
const dotenv = require('dotenv')

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth' , Authroutes);
app.use('/api/protected' , protectedRoutes);

const Port = process.env.PORT || 5000 ;

app.listen(Port , ()=> console.log(`server is started at ${Port}`))