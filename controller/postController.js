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


const updatePost = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const postbyID = posts.find((post) => post.id === Number(id));
  if (!postbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no post with id ${id}` });
  }
  const newPostTitle = posts.map((post) => {
    if (post.id === Number(id)) {
      post.title = title;
    }
    return post;
  });
  res.status(200).json({ success: true, post: newPostTitle });
};

  module.exports={
    getPosts,getPostID,updatePost}