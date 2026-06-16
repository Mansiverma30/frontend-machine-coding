import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { text: text, completed: false }]);
    setText("");
  };

  const deleteTodo = (i) => {
    const newTodo = todos.filter((todo, index) => {
      return index !== i;
    });
    setTodos([...newTodo]);
  };
  const completeTodo = (i) => {
    setTodos(
      todos.map((todo, index) =>
        index === i ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <div className="m-10 p-8 flex flex-col w-fit border">
      <h1 className="mb-4 text-lg font-medium">Todo List (Boringgggggggg)</h1>
      <div className="flex gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-2 py-0.5"
        />
        <button
          className="border px-2 cursor-pointer active:scale-95"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {todos.map((t, i) => (
        <div key={i} className="flex border px-2 justify-between gap-10 mt-2">
          <div className="flex gap-2">
            <p
              className={`${t.completed ? "line-through" : ""} cursor-pointer`}
              onClick={() => completeTodo(i)}
            >
              {t.text}
            </p>
          </div>
          <button
            className="cursor-pointer active:scale-95"
            onClick={() => deleteTodo(i)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
