import React from "react";
import "./style.css";

function TodoItem(props) {
  const { deleteTodo, item } = props;

  return (
    <div className="item">
      <li className="list-item">
        {item}
        <button onClick={deleteTodo} className="button">
          Delete
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
