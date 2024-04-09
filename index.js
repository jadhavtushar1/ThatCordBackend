const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tusharjadhavacc:VymkFmBgGIKy9vZp@cluster0.qwo2fpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const User=require('./models/userModel')

app.use(cors())
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`app started on port ${PORT}`)
})
app.post('/api/register',(req,res)=>{
    res.send("ok") 
    User.create({username : req.body.userName, email : req.body.email,password:req.body.password})
})
app.post('/api/user', async (req,res)=>{
    const {email,password}=req.body;
    
    const user = await User.findOne({email,password})
    if(user){ return res.send({status:'ok',user:true , data:user})}
    else{return res.send({status:'error',user:false })}

})
app.get('/api/users', async (req,res)=>{
    
    const users = await User.find()
    if(users){ return res.send({status:'ok',user:true , data:users})}
    else{return res.send({status:'error',user:false })}

})