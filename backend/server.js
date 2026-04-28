const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // MUST BE HERE BEFORE ROUTES!

const executeRoutes = require("./routes/executeRoutes.js");
const aiRoutes = require("./routes/aiRoutes.js");
const cors = require("cors");

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