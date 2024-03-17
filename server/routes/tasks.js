import express from "express";
import { handleAddNewTask, handleDeleteTaskById, handleGetAllTask } from "../controllers/tasks.js";

export const router = express.Router();

router.route("/")
.post(handleAddNewTask)
.get(handleGetAllTask)

router.route("/:id")
.delete(handleDeleteTaskById)
