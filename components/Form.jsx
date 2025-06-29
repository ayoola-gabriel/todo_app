'use client'

import React from 'react'
import { Plus } from 'lucide-react'

const Form = ({setTodos}) => {
    // This component is a placeholder for the form functionality
    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        setTodos((prevTodos) => [
            ...prevTodos,
            { title: value, id: self.crypto.randomUUID(), is_completed: false }
        ]);
        event.target.reset();
    }
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor='todo'>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add a new task"
      />
      </label>
      <button>
        <span className="visually-hidden">Add Task</span>
        <Plus size={20} />
      </button>
    </form>
  )
}

export default Form