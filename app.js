const express = require('express');
const app = express();
const connectDB= require ("./DB/connectdb.js");
const route = require("./routes/route.js");
var bodyParser = require('body-parser')
// const path = require('path');

const port = 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";  


app.use(express.json());
connectDB(DATABASE_URL);
 app.use(bodyParser.urlencoded({ extended: true }))
 app.use(express.urlencoded({ extended: true }));   
 app.use(express.json());

app.use("/" ,route);
 


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})