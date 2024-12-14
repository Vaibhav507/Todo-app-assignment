import React, { useEffect, useState } from 'react';
import TodoCard from '../components/TodoCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initializeTodos } from '../redux/todoSlice';

const HomePage = () => {
  

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const apiTodos = response.data.slice(0, 2).map(todo => ({
          id: todo.id.toString(),
          title: todo.title,
          description: "No description provided",
          completed: todo.completed
        }));
        dispatch(initializeTodos(apiTodos));
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    if(todos.length==0)
      fetchTodos();

    
  }, []);

  return (
    <div className='flex flex-col gap-5 mx-auto w-3/6'>
      <p className='text-5xl uppercase tracking-widest mt-20 text-[#DBEDF3] text-center'>Todos</p>
      <div className="bg-[#F73859] rounded-full font-bold px-10 py-2 w-fit cursor-pointer text-[#DBEDF3]" >
        <Link to="/add" >Add Todo</Link> 
      </div>
      {todos.length == 0 ?
      <div className="text-[#DBEDF3] text-2xl text-center">No Todos</div> : 
      todos.map(t => <TodoCard key={t.id} id={t.id} title={t.title} completed={t.completed} description={t.description}/>)
    }
      <div className="pb-20"></div>
    </div>
  )
}

export default HomePage