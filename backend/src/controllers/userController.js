
const UserModel = require("../database/schemas/user");


//Endpoint CREATE -------------------------------------------------------------(C)
const createUser = async (req, res) => {
  try {
    const body = req.body;
    const { username, password, email } = body;

    const data = {
      username: username,
      password: password,
      email: email,
    };
    const newUser = new UserModel(data);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH CREATE", message: error });
  }
};


// La función get Me nos dará informació sobre el usuario que está consultando
async function getMe(req,res){
  const user_id = req.user.user_id;

  
  
  const response = await UserModel.findById(user_id)

  if(!response){
    res.status(400).json("no se ha encontrado al usuario")
  } else {
    res.status(200).json(response)
  }
}

//Endpoint Read All -----------------------------------------------------------(R)
const getUserList = async (req, res) => {
  const {sector} = req.query

  if(sector === undefined){
    try {
      const user = await UserModel.find().populate("relationJob").populate("relationPost").populate("relationCompany");
  
      if (user) res.status(200).json(user);
      else res.status(404).send({ status: "ERROR", message: "User not found" });
    } catch (error) {
      return res.status(500).send({ status: "ERROR TRYCATCH List", message: error });
    }
    
  }else{
    try {
      const user = await UserModel.find({sector}).populate("relationJob").populate("relationPost").populate("relationCompany");
  
      if (user) res.status(200).json(user);
      else res.status(404).send({ status: "ERROR", message: "User not found" });
    } catch (error) {
      return res.status(500).send({ status: "ERROR TRYCATCH List", message: error });
    }

  }


};


async function getUsersRole(req, res) {
  const { role } = req.query;
  let response = null;
  if (role === undefined) {
      response = await UserModel.find();
  } else {
      response = await UserModel.find({ role }) //*-Deberemos buscar con la ruta */users?active=(true|false). ej= */users?active=true para sacar todos los activos
  }

  res.status(200).send(response)
}





//Endpoint Read One By Id -----------------------------------------------------(R)
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).populate("relationJob").populate("relationPost");
    if (user) res.status(201).json(user);
    else res.status(404).send({ status: "ERROR", message: "User not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH ById", message: error });
  }
};

const getUserPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).populate("relationJob").populate("relationPost");
    if (user) res.status(201).json(user.relationPost);
    else res.status(404).send({ status: "ERROR", message: "User not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH ById", message: error });
  }
  
};

//Endpoint Update -------------------------------------------------------------(U)
const updateUser = async (req, res) => {
  try {
    console.log(req);
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, req.body).populate("relationJob").populate("relationPost"); ;
    if (user) res.status(200).json(user);
    else res.status(404).send({ status: "ERROR", message: "User not Found. Not Updated" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH UPDATE", message: error });
  }
};
//Endpoint Delete -------------------------------------------------------------(D)
const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else res.status(404).send({ status: "ERROR", message: "User not Found. Not Deleted." });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH DELETE", message: error });
  }
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
  getMe,
  getUserPosts
};
