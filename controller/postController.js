let {posts}=require('../data/posts');

const getPosts = (req, res) => {
    res.status(200).json({ success: true, posts: posts })
  }
const getPostID=(req,res)=>{
    const {id}=req.params;
    const postbyID = posts.find((post) => post.id === Number(id))

  if (!postbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no post with id ${id}` })
  }
  res.status(200).json({success: true,post:postbyID})

}

  module.exports={
    getPosts,getPostID}