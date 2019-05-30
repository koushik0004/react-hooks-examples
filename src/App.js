import React, { useState, useEffect } from "react";

import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);
  const [fontColor, setFontColor] = useState('');

  useEffect(() => {
    const fontColor = todos.filter(todo => todo.complete === true).length >= 3 ? 'red' : ''
    setFontColor(fontColor)
    console.log(`rendering App useEffect`)
  }, [todos])

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

  return (
    <div className="App">
      <Form
        onSubmit={text => setTodos([{ text, complete: false}, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : "",
              color: fontColor ? fontColor : ''
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};
