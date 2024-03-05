const express = require("express");
const router = express.Router();


const {getPosts,getPostID}=require('../controller/postController')


router.route('/').get(getPosts);
router.route('/:id').get(getPostID);

module.exports=router