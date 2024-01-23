import "./TodoInput.css";
function TodoInput({ text, setText, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        placeholder="Enter any task description..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}

export default TodoInput;
