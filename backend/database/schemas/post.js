const { Schema, model }  = require('mongoose');

const postSchema = new Schema ({

    content: { type: String },
    postedBy: { type: Schema.Types.ObjectId, ref:'User' },
    comments: { type: Schema.Types.ObjectId, ref:'User' },
    likes: { type: Schema.Types.ObjectId, ref:'User' },
    dislikes: { type: Schema.Types.ObjectId, ref:'User' },
    //likesCount: { type: Number, default: 0 },
    //dislikesCount: { type: Number, default: 0 },
    //uploadphotos: { type: Image, ref:'User'},
    //uploadvideos: { type: Image.uploadvideos, ref:'User'},
    //createdevents: { type: Event, ref:'User'},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    
    pinned: Boolean
    });

const Post = model('post', postSchema);

module.exports = Post;