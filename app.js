const express = require("express");
const app = express();
const posts = require('./routes/postRouter');
const users=require('./routes/userRouter')

app.use(express.json());

app.use("/api/posts",posts);
app.use("/api/users",users)


app.get('/',(req,res)=>{
    res.send('<h1>test</h1>')
})

const PORT=2872;
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT} . . . `) 
})


