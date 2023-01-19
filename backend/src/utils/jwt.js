const jwt = require('jsonwebtoken')
require('dotenv').config();

const jwtSecretKey= process.env.JWT_SECRET_KEY

function createAccesToken(user){
    const expToken = new Date();
    expToken.setHours(expToken.getHours()+6);

    const payload = {
        token_type:"access",
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime()
    }

    return jwt.sign(payload, jwtSecretKey)
}

function decode(token){
    return jwt.decode(token, jwtSecretKey,true)
}



module.exports={
    createAccesToken,
    decode,
}


