import express from "express";
import cors from "cors";
import { router } from "./routes/tasks.js";
import connectMongoDB from "./connection.js";

const app = express();
const PORT = 7000;

// mongoDB connect
connectMongoDB("mongodb+srv://bikashkakati:bikash108kakati@cluster0.rjqt4xq.mongodb.net/")
.then(()=> console.log("Connected to mongoDB successfully"))
.catch(()=> console.log("Connection failed to mongoDB"))

// middlewares
app.use(cors());
app.use(express.json());
app.use("/task",router);

app.listen(PORT,()=>console.log("server started at PORT:"+PORT));