import { Task } from "../models/tasks.js";

export async function handleAddNewTask(req, res){
    const body = req.body;
    const result = await Task.create({
        taskTitle:body.task,
    })
    return res.status(201).json(result);
}
export async function handleGetAllTask(req, res){
    const allTasks = await Task.find({});
    if(!allTasks.length){
        return res.send([]);
    }
    return res.json(allTasks);
}
export async function handleDeleteTaskById(req, res){
    const taskId = req.params.id;
    await Task.findByIdAndDelete(taskId);
    return res.json({status:"task delete successfully"});
}