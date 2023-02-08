import React from "react";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const handleDestroy = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handlecomplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  onClick={() => handlecomplete(todo.id)}
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                />
                <label>{todo.text}</label>
                <button
                  onClick={() => handleDestroy(todo.id)}
                  className="destroy"
                ></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
