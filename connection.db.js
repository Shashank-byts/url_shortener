const mongoose=require('mongoose');

async function connectDB(url){
    try{
        return await mongoose.connect(url);
    }catch(err){
        console.log("error connecting to DB",err);
    }       
}

module.exports={connectDB};