const express=require('express');

const router=express.Router();
const {generateNewShortURL,handleGetURL,getAnalytics}=require('../controllers/url.controllers');

// console.log(!generateNewShortURL);

router.post('/',generateNewShortURL)
.get('/:shortId',handleGetURL)
.get('/analytics/:shortId',getAnalytics);
module.exports=router;