import express from 'express';
import mongoose from 'mongoose';

import bodyparser from 'body-parser';
import cors from 'cors';

import { keys } from "./keys.js";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

const app = express();

const PORT =  process.env.PORT || 5000

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(cors());

mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
    console.log('DB CONNECTED')
});

mongoose.connection.on('error',(err)=>{
    console.log('Error in connection',err)
});

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

app.get('/',(req, res) => {
    res.send('CHAT SERVER WORKING!');
})

app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`);
});

