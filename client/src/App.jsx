import { Fragment, useEffect, useRef, useState } from 'react';
import './App.css';
import axios from "axios";

const App =()=> {
  const inputRef = useRef();
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    handleGetTasks();
  },[])

  async function handleGetTasks(){
    const {data} = await axios.get("http://localhost:7000/task");
    setTaskList(data);
  }
  async function handleDeleteTask(taskId){
    await axios.delete("http://localhost:7000/task/"+taskId);
    const updatedTaskList = taskList.filter(task => task._id !== taskId);
    setTaskList(updatedTaskList);
  }


  async function handleSubmitTask(e) {
    e.preventDefault();
    // console.log(inputRef.current.value);
    const tasks = {
      task :inputRef.current.value,
    }

    const {data:{_id,taskTitle}} = await axios.post("http://localhost:7000/task",
      tasks,
      { headers: { "Content-Type": "application/json" } }
      );
    setTaskList(prev => [...prev, {_id, taskTitle}]);
  }
  return (
    <Fragment>
      <form className="formContainer" onSubmit={handleSubmitTask}>
      <input type="text" className="inputField" ref={inputRef} />
      <button type="submit">Add Task</button>
    </form>
    <ul>
      {
        taskList.map((task)=>{
          return <li key={task._id}>{task.taskTitle}{"\t"}<button onClick={()=>{handleDeleteTask(task._id)}}>X</button></li>
        })
      }
    </ul>
    </Fragment>
  )
}

export default App
