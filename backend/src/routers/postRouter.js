const { Router } = require("express");

const middle = require("../middleware/validations.js");
const md_auth = require("../middleware/autenticated") 

const {
  createPost,
  getPostList,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const routerPost = Router();

routerPost.post("/", [md_auth.asureAuth, middle.time, middle.validateHasBody], createPost);
routerPost.get("/", [md_auth.asureAuth, middle.time], getPostList);
routerPost.get("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat], getPostById);
routerPost.patch("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat,middle.validateHasBody], updatePost);
routerPost.delete("/:id", [md_auth.asureAuth, middle.time, middle.validateIdFormat], deletePost);

module.exports = routerPost;
