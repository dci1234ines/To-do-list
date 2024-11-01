import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <div className="header">
        <h1>📝 My To-Do List</h1>
        <div className="input-container">
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Add a new task..." 
            autoFocus
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className="no-tasks">No tasks yet. Add your first task!</p>}
    </div>
  );
}

export default App;
