import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import İnfo from "./components/İnfo";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, todos]);

  useEffect(() => {
    getLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  console.log(filteredTodos);

  return (
    <>
      <section className="todoapp">
        <Header setTodos={setTodos} todos={todos} />
        <TodoList
          filterHandler={filterHandler}
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
        <Footer
          setFilteredTodos={setFilteredTodos}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          status={status}
        />
      </section>

      <İnfo />
    </>
  );
}

export default App;
