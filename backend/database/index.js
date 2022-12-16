

require('dotenv').config();
const mongoose = require('mongoose');

const url=process.env.DB_URL

mongoose.connect(url)

const mongo = mongoose.connection;
mongo.on('error', (error) => console.error(error));
mongo.once('open', () => {
    console.log('connected to database, yuppy!');
});

module.exports = mongo;