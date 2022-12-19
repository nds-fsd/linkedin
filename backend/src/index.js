require('dotenv').config();
const express = require("express");
const mongo = require("../database")

const cors = require("cors");
const app = express();
const port = process.env.PORT;

const generalRouter = require("../routes")
app.use(cors())
app.use(express.json())

app.use(generalRouter)

app.listen(port, () => {
    console.log(`Server is up and running at port ${port} ⚡`)
})