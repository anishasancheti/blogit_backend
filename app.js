import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(
    'mongodb+srv://admin:admin123@cluster0.ujohlzi.mongodb.net/Blogit?retryWrites=true&w=majority'
)
.then(()=>app.listen(process.env.PORT || 5000))
.then(()=>console.log("Connected to DataBase and Localhost 5000"))
.catch((err)=>console.log(err));