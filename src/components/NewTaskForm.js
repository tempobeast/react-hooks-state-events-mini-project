import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  })

  function handleChange(e) {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    const newItem = {
      text: newTask.text,
      category: newTask.category
    }
    onTaskFormSubmit(newItem)
  }
  
  const dropdownCategories = categories.filter(category => {
      if (category === "All") {
      return false
      } else {
      return true
    }
  })

  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {dropdownCategories.map(category => {
           return <option key={category} value={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
