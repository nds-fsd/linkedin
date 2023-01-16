const process = require("process");

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const mongo = mongoose.connection;
mongo.on("error", (error) => console.error(error));
mongo.once("open", () => {
  console.log("connected to database, yuppy!");
});

module.exports = mongo;
