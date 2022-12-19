const { Router } = require("express");


 const {registerUser, getUserList, editUser, deleteUser, findUser } = require("../controllers/Usercontroller");
 
 const router = Router();


router.post("/user", registerUser);
  router.get("/user", getUserList);
  router.patch/("/user/:id", editUser);
  router.delete/("/user/:id", deleteUser);
  router.get/("user/:id", findUser);

  module.exports = router