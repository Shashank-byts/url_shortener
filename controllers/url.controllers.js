const { nanoid } =require("nanoid");
const URL=require('../models/url.models');
async function generateNewShortURL(req,res) {
    const body=req.body;
    if(!body.url) return res.status(400).json({error:"url is required"});

    const shortID=nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectURL:body.url,
        visitHistory:[],
    });

    return res.json({id:shortID});
}

async function handleGetURL(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOne({shortId});
    if(!entry) return res.status(404).json({error:"short url not found"});

    entry.visitHistory.push({timestamps:Date.now()});
    await entry.save();
    return res.redirect(entry.redirectURL);
}

async function getAnalytics(req,res){
    const shortId=req.params.shortId;
    const entry=await URL.findOne({shortId});
    if(!entry) return res.status(404).json({error:"short url not found"});
    return res.json({totalClicks:entry.visitHistory.length,analytics:entry.visitHistory});
}
module.exports={generateNewShortURL,handleGetURL,getAnalytics};