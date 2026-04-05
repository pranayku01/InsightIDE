const express =require("express");
const executeRoutes=require("./routes/executeRoutes.js");
const dotenv=require("dotenv");
dotenv.config();
const aiRoutes=require("./routes/aiRoutes.js");
const cors = require("cors");

const app = express();
console.log("API KEY:", process.env.GEMINI_API_KEY);
app.use(express.json());

app.use("/api/execute", executeRoutes);
app.use("/api/ai",aiRoutes);

app.listen(3000);