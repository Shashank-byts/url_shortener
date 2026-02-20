const express=require('express');
const app =express();
const PORT=8000;
const urlRouter=require('./routes/url.router');
const {connectDB}=require('./connection.db');

console.log("starting server...");
// connecting the db
connectDB("mongodb://localhost:27017/url-shortener")
.then(()=>{  console.log("DB connected successfully")})
.catch((err)=>{console.log("DB connection failed",err)}); 
// middleware used for converting json data into js object so that we can 
// destructure it 
app.use(express.json());
// defining the url routes which way to go when we hit the url endpoint
app.use("/url",urlRouter);
// starting the server at PORT 8000
app.listen(PORT,()=>console.log(`server started at PORT: ${PORT}`))