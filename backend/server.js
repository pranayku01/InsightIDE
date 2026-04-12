const express = require("express");
const executeRoutes = require("./routes/executeRoutes.js");
const aiRoutes = require("./routes/aiRoutes.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/execute", executeRoutes);
app.use("/api/ai", aiRoutes);

// server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});