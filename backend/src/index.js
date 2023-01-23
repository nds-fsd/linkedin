require("dotenv").config();

const express = require("express");
const {connectDB} = require("./database");
const cors = require("cors");

let port = process.env.PORT;

if(process.env.NODE_ENV !== 'test'){
    connectDB().then((error) => {
        if(error){
            console.log(error);
        }else{
            console.log('🏢 Connected to database!');
        }
    });
}else{
    port = process.env.TEST_PORT
}

const app = express();


const generalRouter = require("./routers");

app.use(cors());
app.use(express.json());
app.use(generalRouter);

const server = app.listen(port, () => {
  console.log(`Server is up and running at port ${port} ⚡`);
});

module.exports = {server, app}