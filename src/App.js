import { useState } from "react";
import ListItem from "./components/ListItem/ListItem";
import TodoInput from "./components/TodoInput/TodoInput";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (text !== "") {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          text,
          timestamp: new Date(),
          done: false,
        },
      ]);
      setText("");
    }
  };

  const deleteItem = (id) => {
    const filter = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filter);
  };

  const markAsDone = (id) => {
    const todosCopy = todos.slice();
    const todo = todosCopy.find((todo) => todo.id === id);
    todo && (todo.done = !todo.done);
    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput text={text} setText={setText} addTodo={addTodo} />
      <Filter todos={todos} setTodos={setTodos} />
      {todos?.length > 0 ? (
        todos.map((todo) => (
          <ListItem
            todo={todo}
            deleteItem={deleteItem}
            markAsDone={markAsDone}
            key={todo.id}
          />
        ))
      ) : (
        <div className="empty-list">
          <p>No task found</p>
        </div>
      )}
    </div>
  );
}

export default App;
