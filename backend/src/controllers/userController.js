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
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH CREATE", message: error });
  }
};

//Endpoint Read All -----------------------------------------------------------(R)
const getUserList = async (req, res) => {
  try {
    const user = await UserModel.find().populate("relationJob").populate("relationPost");

    if (user) res.status(302).json(user);
    else res.status(404).send({ status: "ERROR", message: "User not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH List", message: error });
  }
};

//Endpoint Read One By Id -----------------------------------------------------(R)
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id).populate("relationJob").populate("relationPost");
    if (user) res.status(302).json(user);
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
    const user = await UserModel.findByIdAndUpdate(id, req.body);
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
};