'use client';

import React from 'react';
import Header from '../components/Header';
import TODOHero from '../components/TODOHero';
import TODOList from '../components/TODOList';
import Form from '../components/Form';
import { useState } from 'react';



export default function Home() {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter(
    todo => todo.is_completed === true).length;
  const total_todos = todos.length;

  
  return (
    <div className='wrapper'>
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos}/>
      <TODOList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

