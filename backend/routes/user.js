const { Router } = require("express");


 const {registerUser, getUserList, editUser, deleteUser, findUser } = require("../controllers/Usercontroller");
 
 const router = Router();


router.post("/", registerUser);
  router.get("/", getUserList);
  router.patch("/:id", editUser);
  router.delete("/:id", deleteUser);
  router.get("/:id", findUser);

  module.exports = router