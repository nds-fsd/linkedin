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

routerPost.post("/", middle.time, createPost);
routerPost.get("/", middle.time, getPostList);
routerPost.get("/:id", middle.time, middle.validateIdFormat,md_auth.asureAuth, getPostById);
routerPost.patch("/:id",  middle.time, middle.validateIdFormat,middle.validateHasBody, updatePost);
routerPost.delete("/:id", middle.time, middle.validateIdFormat, deletePost);

module.exports = routerPost;
