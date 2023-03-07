const PostModel = require("../database/schemas/post");
const User = require("../database/schemas/user") //relación schemas 01

//Endpoint CREATE -------------------------------------------------------------(C)
const createPost = async (req, res) => {
  try {
    const body = req.body;
    const { 
      title, 
      description, 
      content, 
      postedBy, 
      comments,
      postphotoUrl, 
      createdAt, 
      updatedAt,
      likes,
      userId, //Relación Schemas 02
    } = body;

    
const user = await User.findById(userId) // Relación Schemas 03


    const data = {
      title,
      description,
      content,
      postedBy,
      comments,
      postphotoUrl,
      createdAt,
      updatedAt,
      likes,
      user: user._id // Relación Schemas 04
    };
    const newPost = new PostModel(data);
    await newPost.save();
    user.relationPost = user.relationPost.concat(newPost._id) //relación Schemas 05
    await user.save()

    res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH CREATE", message: error });
  }
};

//Endpoint Read All -----------------------------------------------------------(R)
const getPostList = async (req, res) => {
  try {
    const post = await PostModel.find().populate("user");

    if (post) res.status(201).json(post);
    else res.status(404).send({ status: "ERROR", message: "Posts not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH List", message: error });
  }
};

//Endpoint Read One By Id -----------------------------------------------------(R)
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id) //TODO.populate("user");
    if (post) res.status(200).json(post);
    else res.status(404).send({ status: "ERROR", message: "Post not found" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH ById", message: error });
  }
};

//Endpoint Update -------------------------------------------------------------(U)
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findByIdAndUpdate(id, req.body);
    if (post) res.status(200).json(post);
    else res.status(404).send({ status: "ERROR", message: "Post not Found. Not Updated" });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH UPDATE", message: error });
  }
};

//Endpoint Delete -------------------------------------------------------------(D)
const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findByIdAndDelete(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else res.status(404).send({ status: "ERROR", message: "Post not Found. Not Deleted." });
  } catch (error) {
    return res.status(500).send({ status: "ERROR TRYCATCH DELETE", message: error });
  }
};

module.exports = {
  createPost,
  getPostList,
  getPostById,
  updatePost,
  deletePost,
};
