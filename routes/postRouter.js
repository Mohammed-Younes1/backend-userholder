const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPostID,
  updatePost,
  createPost,
  deletePost,
} = require("../controller/postController");

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPostID).put(updatePost).delete(deletePost);

module.exports = router;
