
const express = require("express");
const mongo = require("../database")

const cors = require("cors");

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Server is up and running at port ${port} ⚡`)
})