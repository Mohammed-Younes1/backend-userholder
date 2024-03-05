const express = require("express");
const router = express.Router();


const {getPosts,getPostID,updatePost}=require('../controller/postController')


router.route('/').get(getPosts);
router.route('/:id').get(getPostID).put(updatePost);

module.exports=router