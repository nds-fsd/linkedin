const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String  },
  description: { type: String },
  content: { type: String, required: true },
  //postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  comments: { type: String },
  postphotoUrl: { type: String},
  likes: { type: [Schema.ObjectId], ref: "user" },
  //dislikes: { type: Boolean },
  //likesCount: { type: Number, default: 0 },
  //dislikesCount: { type: Number, default: 0 },
  uploadphotos: { type: String},
  //uploadvideos: { type: Image.uploadvideos, ref:'User'},
  //createdevents: { type: Event, ref:'User'},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  user:{ type: [Schema.ObjectId], ref: "user" },
  


  //pinned: Boolean,
});

const Post = model("post", postSchema);

module.exports = Post;
