import React from "react";
//import { TASKS } from "../data";
import Task from "./Task"


function TaskList({ tasksToDisplay, deleteTask }) {

 console.log(tasksToDisplay)
    
  const displayTasks = tasksToDisplay.map((task) => <Task key={task.text} {...task} deleteTask={deleteTask}/>)   

    return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
