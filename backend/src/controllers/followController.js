const User = require('../database/schemas/user');
const Follow = require('../database/schemas/follow');

const followUser = async (req, res) => {
  try {
    // Controlador para seguir a un usuario
    const follower = await User.findById(req.body.follower); // El usuario que sigue
    const following = await User.findById(req.params.id); // El usuario que está siendo seguido
    
    // // Comprobar si el usuario ya está siguiendo al usuario objetivo
     const existingFollow = await Follow.findOne({ follower: follower, following: following });
     if (existingFollow) {
       return res.status(400).json({ msg: 'Ya estás siguiendo a este usuario' });
     }

    const follow = new Follow({
      follower: follower,
      following: following
    });

    await follow.save();

    follower.following.push(following);
    await follower.save();

    following.followers.push(follower);
    await following.save();

    res.json(follow);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(console.log("error del servidor"));
  }
};


const unfollowUser = async (req, res) => {
  try {
    const follower = await User.findById(req.body.follower); // El usuario que sigue
    const following = await User.findById(req.params.id); // El usuario que está siendo seguido

    // Comprobar si el usuario ya está siguiendo al usuario objetivo
    const existingFollow = await Follow.findOne({ follower: follower.id, following: following.id });
    if (!existingFollow) {
      return res.status(400).json({ msg: 'No estás siguiendo a este usuario' });
    }

    await existingFollow.remove();

    follower.following.pull(following);
    await follower.save();

    following.followers.pull(follower);
    await following.save();

    res.json({ msg: 'Dejaste de seguir a este usuario' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};


 
  // const getFollowers = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const followers = await Follow.findById(id) //TODO.populate("user");
  //     if (followers) res.status(200).json(followers);
  //     else res.status(404).send({ status: "ERROR", message: "Post not found" });
  //   } catch (error) {
  //     return res.status(500).send({ status: "ERROR TRYCATCH ById", message: error });
  //   }
  // };

  

 





module.exports = {
  followUser,
  unfollowUser,
  
}