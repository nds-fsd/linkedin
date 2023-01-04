const { Schema, model }  = require('mongoose');

const postSchema = new Schema({

    content: { type: String},
    postedBy: { type: Schema.Types.ObjectId, ref:'User' },
    comment: { type: Schema.Types.ObjectId, ref:'User' },
    likes: { type: Schema.Types.ObjectId, ref:'User'},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    pinned: Boolean
    });

const Post = model('post', postSchema);

module.exports = Post;