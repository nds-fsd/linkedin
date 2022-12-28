const { Router } = require("express");


 const {registerPost, getPostList, editPost, deletePost, findPost } = require("../controllers/Postcontroller");
 
 const router = Router();


router.post("/", registerPost);
router.get("/", getPostList);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);
router.get("/:id", findPost);

  module.exports = router