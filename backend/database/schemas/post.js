const { Schema, model }  = require('mongoose');

const postSchema = new Schema({

    content: { type: String},
    postedBy: { type: Schema.Types.ObjectId, ref:'User' },
    pinned: Boolean
    });

const Post = model('post', postSchema);

module.exports = Post;