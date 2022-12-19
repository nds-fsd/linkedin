const { Router } = require("express");

const UserModel = require("../mongo/schema/user/user")

 const {registerUser, getUserList, editUser, deleteUser, findUser } = require("../utils/UserController");
 
 const routerUser = Router();


routerUser.post("/user", registerUser);
  routerUser.get("/user", getUserList);
  routerUser.patch/("/user/:id", editUser);
  routerUser.delete/("/user/:id", deleteUser);
  routerUser.get/("user/:id", findUser);

  module.exports = routerUser