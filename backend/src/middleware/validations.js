

const time = (req, res, next) => {
    console.log("\nTime : " + new Date());
    console.log("\tvalidate = " + req.method);
    console.log("\toriginalUrl = " + req.originalUrl);
    console.log("\theaders = " + JSON.stringify(req.headers));  
  next();
};

const validateIdFormat = (req, res, next) => {
  const { id } = req.params;

  //Incorrect Format (Mongo ID)
  if (id.match(/^[0-9a-fA-F]{24}$/)) next();
  else return res.status(404).send({ status: "ERROR", message: "incorrect format of Identifier" });
};

const validateHasBody = (req, res, next) => {
  //TODO Comprobar si existe el Body
  if (!req.body) return res.status(400).send({ status: "ERROR", message: "Body not Found" });
  next();
};

const User = require( "../database/schemas/user");

const uniqueUser = async (req, res, next) =>{
  
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if(user) {
      return res.status(400).send({status:"ERROR", message:"Email already exists"});
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({status:"ERROR", message:"Internal server error"});
  }
}

const passNeeded = (req, res, next) => {
  const { password } = req.body;
  
  if(!password) {
    return res.status(400).send({status:"ERROR", message:"You need a password!"});
  }
  
  next();
}
//TODO Comprobar que en BBDD no hayan elementos repetidos (schema UNIQUE)

module.exports = {
  validateIdFormat,
  validateHasBody,
  time,
  uniqueUser,
  passNeeded
};
