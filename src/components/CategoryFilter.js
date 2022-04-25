import React from "react";

// {categories.map ((category) => (
//   <button key={category}>{category}</button>

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

  function handleClick(e) {
    setSelectedCategory(e.target.value)
  }
    
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
      return (
        <button 
          onClick={handleClick} 
          key={category}
          value={category}
          className={selectedCategory === category ? "selected" : null}
          >{category} 
        </button>
      )}
      )}
    </div>
  );
  
}

export default CategoryFilter;
