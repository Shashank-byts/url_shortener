const express=require('express');
const app =express();
const PORT=8000;
const urlRouter=require('./routes/url.router');
const {connectDB}=require('./connection.db');

console.log("starting server...");
connectDB("mongodb://localhost:27017/url-shortener")
.then(()=>{  console.log("DB connected successfully")})
.catch((err)=>{console.log("DB connection failed",err)});  
app.use(express.json());
app.use("/url",urlRouter);
app.listen(PORT,()=>console.log(`server started at PORT: ${PORT}`))