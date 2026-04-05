const express=require("express");
const { analyzeCodeController }=require("../controllers/aicontroller.js");

const router = express.Router();

router.post("/analyze", analyzeCodeController);

module.exports=router;