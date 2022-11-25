const express=require('express')
const dotenv= require('dotenv');
const { chats } = require('./data/data');
const { connectDB } = require('./config/db');
const {notFound,errorHandler}=require('./middelware/errorMiddleware')

const userRoutes=require('./routes/userRoutes');


app=express();
dotenv.config()

connectDB();

app.use(express.json()); // to accept Json Data 

app.get('/',(req,res)=>{
    res.send('API is Created')
});

app.use('/api/user',userRoutes) // TO use Routes created in userRoutes


app.use(notFound);
app.use(errorHandler);
// app.get('/api/chat',(req,res)=>{
//     res.send(chats)
// })

// app.get('/api/chat/:id',(req,res)=>{
//     // console.log(req.params.id);
//     const singleChat=chats.find((c)=>c._id===req.params.id);
//     res.send(singleChat);
// })

const PORT =process.env.PORT || 3000

app.listen(PORT,(console.log(`Server started on PORT ${PORT}`)))