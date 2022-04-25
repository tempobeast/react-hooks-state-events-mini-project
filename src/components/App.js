import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS});

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)
  
  

  function onTaskFormSubmit(newItem) {
    setTasks([...tasks, newItem])
  }

  const tasksToDisplay = 
    selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory)

  // .filter(task => {
  //     if (selectedCategory === "All") return true;
  //     return task.category === selectedCategory;
  //})

  function deleteTask(deleteItem) {
    setTasks(() => {
      return tasks.filter((item) => {
        return item.text !== deleteItem
      })
    })
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList   
        deleteTask={deleteTask}
        tasksToDisplay={tasksToDisplay}
      />
    </div>
  );
}

export default App;
