const router = require('express').Router();
const verify = require('./verifyToken');
const Post = require('../models/Post');

//Return all posts
router.get('/', verify, async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

//Create a post
router.post('/', verify, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  
  try {
    const savedPost = await post.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(501).json({ message: err })
  }

  // post.save()
  // 	.then(data => {
  // 		console.log(data);
  // 		res.status(200).json(data);
  // 	})
  // 	.catch(err => {
  // 		res.status(501).json({ message: err });
  // 	});
});

//Get a specific post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

//Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.deleteOne({ _id: req.params.id });
    res.status(200).json(post);
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

//Update a post
router.patch('/:id', async (req, res) => {
  try {
    const post = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } });
    res.status(200).json(post);
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

module.exports = router;