import React, { useState } from 'react';
import '../styles/globals.css';

const Todos = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [todoId, setTodoId] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed,
      }),
    });

    const data = await response.json();
    setTodoId(data.id);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-8 text-white content-center">Todo Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex mb-4">
            <label htmlFor="title" className="text-white mr-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-2 bg-white text-black focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex mb-4">
            <label htmlFor="completed" className="text-white mr-2">
              Completed:
            </label>
            <input
              type="checkbox"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="form-checkbox focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Todo
          </button>
        </form>
        {todoId && (
          <p className="text-white mt-4">Created Todo with ID: {todoId}</p>
        )}
      </div>
    </div>
  );
};

export default Todos;
