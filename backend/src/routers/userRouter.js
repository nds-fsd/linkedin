const { Router } = require("express");

const middle = require("../middleware/validations.js");

const {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const {register, login, refreshAccesToken} = require("../controllers/auth")
const mdAuth = require("../middleware/autenticated") 

const routerUser = Router();

routerUser.post("/register",  register);
routerUser.post("/login",  login);
// routerUser.post("/refreshtoken", middle.time, middle.validateHasBody, refreshAccesToken);
// routerUser.post("/", middle.time, middle.validateHasBody, createUser);
routerUser.get("/", middle.time, getUserList);
routerUser.get("/:id", middle.time, middle.validateIdFormat, getUserById);
routerUser.patch("/:id", middle.time, middle.validateIdFormat, middle.validateHasBody, updateUser);
routerUser.delete("/:id", middle.time, middle.validateIdFormat, deleteUser);

module.exports = routerUser;
