const express =require("express");
const executeRoutes=require("./routes/executeRoutes.js");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/execute", executeRoutes);

app.listen(3000);