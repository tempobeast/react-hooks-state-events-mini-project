import React from "react";

function Task({ id, text, category, deleteTask }) {

 function handleClick (e) {
   deleteTask(e.target.parentNode.id)
 }

  return (
    <div className="task" id={text}>
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleClick} >X</button>
    </div>
  );
}

export default Task;
