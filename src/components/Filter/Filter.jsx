import "./Filter.css";
function Filter({ todos, setTodos }) {
  const printLatestTasks = () => {
    const filter = todos
      .slice()
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    setTodos(filter);
  };
  const printResentTasks = () => {
    const filter = todos
      .slice()
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    setTodos(filter);
  };

  return (
    <div className="sorting-field">
      <button onClick={printLatestTasks}>Latest Tasks</button>
      <button onClick={printResentTasks}>Resent Tasks</button>
    </div>
  );
}

export default Filter;
