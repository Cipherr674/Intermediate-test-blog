const express = require("express");
const app = express();

var PORT = 3000;
app.use(express.json());
const blogModel=require('./model');
require('./connection')
//Write missing code here and all the CRUD operations on the database

app.get('/blog',async (req,res)=>{
  try{
    const blogData=await blogModel.find();
    res.send(blogData);
  }catch(e){
    res.send(e);
  }
})

app.post('/add',async (req,res)=>{
  try{
    const blogData=new blogModel(req.body);
    const createBlog=await blogData.save();
    res.send(createBlog);
  }catch(e){
    res.send(e);
  }
})

// to update an blog
app.put('/edit/:id',async (req,res)=>{
  try{
    const _id=req.params.id;
    const updateBlog=await blogModel.findByIdAndUpdate(_id,req.body,{
      new:true
    });
    res.send(updateBlog); 
  }catch(e){
    res.send(e);
  }
})

// to delete an blog
app.delete('/delete/:id',async (req,res)=>{
  try{
    const _id=req.params.id;
    const deleteBlog=await blogModel.findByIdAndDelete(_id);
    res.send(deleteBlog); 
  }catch(e){
    res.send(e);
  }
})



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
