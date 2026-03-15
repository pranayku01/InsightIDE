const express = require("express");
const { execute } = require("../controllers/execute.js");

const router = express.Router();

router.post("/run", execute);

module.exports = router;