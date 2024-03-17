import mongoose from "mongoose";

export default function connectMongoDB(uri){
    return mongoose.connect(uri,{dbName:"store_tasks"},{collection:"tasks"});
}