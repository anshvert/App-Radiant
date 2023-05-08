import React, { useState,useEffect } from 'react';
import '../css/todo.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
const config = require(`../config/${process.env.NODE_ENV}_params`)

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect( ()=> {
    const userTodoList = async () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      const todoListConfig = {
        url:`${config.urls.baseUrl}todo/get`,
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        data:JSON.stringify({
          email:userData?.email
        })
      }
      const todoList = await axios(todoListConfig)
      setTasks(todoList.data)
    }
    userTodoList().then().catch()

  },[])

  const handleAddTask = () => {
    if (newTask !== '') {
      setTasks([newTask,...tasks]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="Todo">
      <div className="Todo-left">
        <h3>Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <IconButton onClick={() => handleDeleteTask(index)}>
                <DeleteIcon color="error"/>
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="Todo-right">
        <h3>New Task</h3>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Save</button>
      </div>
    </div>
  );
}

export default Todo;
