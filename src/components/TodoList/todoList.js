import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./style.css";

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function addItem() {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    } else {
      alert("Add new todo Item");
    }
  }

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        placeholder="Add todo"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button className="add-button" onClick={addItem}>
        ADD ITEM
      </button>
      <div>
        <ul className="items-container">
          {items.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              deleteTodo={() => deleteItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
