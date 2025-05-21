import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple ToDo List</h2>
      <input
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{ display: "flex", alignItems: "center", marginBottom: 6 }}
          >
            <span
              onClick={() => toggleDone(task.id)}
              style={{
                flexGrow: 1,
                textDecoration: task.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
