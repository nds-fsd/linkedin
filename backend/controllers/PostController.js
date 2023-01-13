const PostModel = require("../database/schemas/post");
//const { post } = require("../routes");

const registerPost = async (req, res) => {
  try {
    const body = req.body;
    const { title, description, content, postedBy, comments, createdAt, updatedAt } = body;
    const data = {
      title,
      description,
      content,
      postedBy,
      comments,
      createdAt,
      updatedAt,
    };
    const newPost = new PostModel(data);
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(404).send("something occurred, try again");
  }
}

const getPostList = async (req, res) => {
    console.log("aquiestamos")
    const user = await PostModel.find();
    console.log("aquiestamos")
    res.json(user);
}
    
const editPost = async (req, res) =>{
    console.log(req)
    const {id} = req.params
    const post = await PostModel.findByIdAndUpdate(id, req.body);
    res.json(post);
}
  
const deletePost = (req, res) => {
    PostModel.findByIdAndDelete(req.params.id, (err, post ) =>{
        if(!post){
            return res.status(500).json(err)
        }
        res.status(200).json(post)
    })
}

const findPost = async (req, res) => {
    const {id} = req.params
    const user = await PostModel.find(id);
    res.json(post);
}
  
module.exports = {
  registerPost, 
  getPostList, 
  editPost, 
  deletePost,
  findPost
}