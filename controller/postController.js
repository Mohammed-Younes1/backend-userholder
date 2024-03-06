let {posts}=require('../data/posts');


//get all post
const getPosts = (req, res) => {
    res.status(200).json({ success: true, posts: posts })
  }

//get post using id
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

// updating post title / 
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

//creating a post
const createPost=(req,res)=>{
  const {id,userId,title,body}=req.body;
  // const {id}=req.body;
  // const {userId}=req.body;
  // const {title}=req.body;
  // const {body}=req.body;

  if (!id && !userId && !title && !body) {
    return res
      .status(404)
      .json({ success: false, msg: `you need fill more info to add post` });
  }
  res.status(201).send({success:true, post:[...posts,{userId,id,title,body}]})
}
//deleting a post
const deletePost=(req,res)=>{
  const { id } = req.params;
  const postbyID = posts.find((post) => post.id === Number(id));

  if (!postbyID) {
    return res
      .status(404)
      .json({ success: false, msg: `no user with id ${id}` });
  }
  const newPosts=posts.filter((user)=>user.id !== Number(req.params.id)
  )
  return res.status(201).send({success:true, users:newPosts})
}

  module.exports={
    getPosts,getPostID,updatePost,createPost,deletePost}