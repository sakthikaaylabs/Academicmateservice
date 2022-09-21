// const { post } = require('./auth');
const router = require('express').Router();
const Post = require('../models/Post')

router.get("/",(req,res) =>{
    console.log("post page API End Point");
    res.send('Post Page API End Point');
})

//create a Post
router.post("/", async(req,res) =>{
    const newPost = new Post (req.body);
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch(err){
        res.status(500).send(err);
    }
})
//Update a Post
router.put("/:id", async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("the post has been updated");
        }else{
            res.status(403).json("you can update only your post")
        }
    } catch(err) {
        res.status(500).json("err")
    }
})
//delete a Post
router.delete("/:id", async(req, res) =>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne({$set:req.body});
            res.status(200).json("the post has been deleted");
        }else{
            res.status(403).json("you can delete only your post")
        }
    } catch(err) {
        res.status(500).json("err")
    }
})

//like //dislike a Post
router.put("/:id/like",async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)) {
            await Post.updateOne({ $push: { likes: req.body.userId}});
            res.status(200).json("post has been liked")
        }else {
            await Post.updateOne({ $pull: { likes: req.body.userId}});
            res.status(200).json("post has been disliked")
        }
    }catch(err) {
        res.status(500).json("err")
    }
})

//get a Post

router.get("/:id", async (req, res) =>{
    try{
        const  post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch(err) {
        res.status(500).send(err)
    }
})
//get timeline posts -> all following posts 

router.get("/timeline/all", async (req, res) =>{
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts =await Promise.all(
            currentUser.followings.map((friendId) =>{
                return Post.find({ userId: friendId});
            })
            );
            res.json(userPosts.concat(...friendPosts));
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;



