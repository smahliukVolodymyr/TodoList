import React, { useState } from "react";
import "./ListItem.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
<RiDeleteBin2Fill />;
function ListItem({ todo, deleteItem, markAsDone }) {
  const [isChecked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!isChecked);
    markAsDone(todo.id);
  };
  return (
    <div className="data-container">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <div className="text">
        <p className={isChecked ? "crossed-text" : ""}>{todo.text}</p>
        <p>{todo.timestamp.toDateString()}</p>
      </div>
      <RiDeleteBin2Fill
        size={28}
        onClick={() => deleteItem(todo.id)}
        className="delete-btn"
      />
    </div>
  );
}

export default ListItem;
