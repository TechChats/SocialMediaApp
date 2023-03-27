import Post from "../models/Post.js";
import User from "../models/User.js";

//creat a post
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    //once the post is create we need to send the update post list to the frontend to view
    const post = await Post.find(); // fetch all the created post 
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

//read-get a all post 
export const getFeedPosts = async (req, res) => {
    try {
      const post = await Post.find();
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  //read-get only user's post 
  export const getUserPosts = async (req, res) => {
    try {
      const { userId } = req.params;
      const post = await Post.find({ userId });
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
 //update - like/dislike button here user like a post or remove like of a post
  export const likePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const post = await Post.findById(id);
      const isLiked = post.likes.get(userId);
  
      //check if user have like a post or note
      if (isLiked) { 
        post.likes.delete(userId); //remove like of user by removing useId for that likes map/list
      } else {
        post.likes.set(userId, true);// add like by adding userId to like map
      }
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes }, // a list of like that we have modified
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };