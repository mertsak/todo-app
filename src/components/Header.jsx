import React, { useState } from "react";

const Header = ({ setTodos, todos }) => {
  const [inputtext, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputtext,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);

    setInputText("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          value={inputtext}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
