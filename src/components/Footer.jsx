import React from "react";

const Footer = ({ todos, setTodos, setStatus, status }) => {
  const handleReset = () => {
    setTodos([]);
  };

  const handleSelect = (e) => {
    e.preventDefault();

    setStatus(e.target.innerHTML);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={(e) => handleSelect(e)}
            className={`${status === "All" ? "selected" : ""}`}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={(e) => handleSelect(e)}
            className={`${status === "Active" ? "selected" : ""}`}
            href="#/"
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={(e) => handleSelect(e)}
            className={`${status === "Completed" ? "selected" : ""}`}
            href="#/"
          >
            Completed
          </a>
        </li>
      </ul>

      <button onClick={() => handleReset()} className="clear-completed">
        Clear All
      </button>
    </footer>
  );
};

export default Footer;
