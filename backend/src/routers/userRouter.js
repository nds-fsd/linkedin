const { Router } = require("express");

const middle = require("../middleware/validations.js");


const {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
  getMe,
  getUserPosts,
} = require("../controllers/userController");

const {register, login, refreshAccesToken} = require("../controllers/auth")
const md_auth = require ("../middleware/autenticated")

const routerUser = Router();

routerUser.post("/register", [middle.uniqueUser, middle.passNeeded, middle.emailNeeded], register);
routerUser.post("/login", [middle.passNeeded, middle.emailNeeded, middle.unknowUser],  login);
// routerUser.post("/refreshtoken", middle.time, middle.validateHasBody, refreshAccesToken);
// routerUser.post("/", middle.time, middle.validateHasBody, createUser);
routerUser.get("/", [middle.time], getUserList);
routerUser.get("/me", [middle.time], getMe);
routerUser.get("/:id", [middle.time, middle.validateIdFormat], getUserById);
routerUser.get("/:id/posts", [middle.time, middle.validateIdFormat], getUserPosts);
routerUser.patch("/:id", [middle.time, middle.validateIdFormat,middle.validateHasBody], updateUser);
routerUser.delete("/:id", [middle.time, middle.validateIdFormat], deleteUser);

module.exports = routerUser;
