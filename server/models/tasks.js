import mongose from "mongoose";

const taskSchema = new mongose.Schema({
    taskTitle:{
        type: String,
        require: true,
    }
})

export const Task = mongose.model("task",taskSchema);