
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://linkedin:A123456@cluster0.heitxrs.mongodb.net/?retryWrites=true&w=majority`)

const mongo = mongoose.connection;
mongo.on('error', (error) => console.error(error));
mongo.once('open', () => {
    console.log('connected to database, yuppy!');
});

module.exports = mongo;