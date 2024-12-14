import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editTodo, removeTodo, markDoneTodo } from '../redux/todoSlice';

const EditTaskPage = () => {
    const { id }= useParams();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const todo = todos.find(t => t.id === id)

    useEffect(()=>{
        setTitle(todo.title)
        setDescription(todo.description)
    }, [todo])
    

    const navigate = useNavigate()
  
    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(editTodo({id,title,description}));
        setTitle('');
        setDescription('');
        navigate('/')
    }

    const deleteTodo = () => {
        dispatch(removeTodo({id}));
        setTitle('');
        setDescription('');
        navigate('/')
    }

    const markDone = () => {
        dispatch(markDoneTodo({id}));
        setTitle('');
        setDescription('');
        navigate('/')
    }

    
  return (
    <div className="flex flex-col gap-10 mx-auto w-3/6 ">
    <p className='text-5xl uppercase tracking-widest mt-20 text-[#DBEDF3] text-center'>Edit Todo</p>

    <form  onSubmit = {onSubmitForm} className='flex flex-col gap-5 pb-20 text-[#DBEDF3]'>
        <div className="flex flex-col gap-2">
            <label>Title</label>
            <input type="text" placeholder='Add a title' value={title} onChange={(e) => setTitle(e.target.value)} className='rounded-md p-2 bg-[#404B69]' />
        </div>
        <div className="flex flex-col gap-2">
            <label>Description</label>
            <textarea name="" id="" className='rounded-md p-2 bg-[#404B69]' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Add a description'></textarea>
        </div>
        <div className="flex gap-10">
            <input type="submit" value="Submit" className='rounded-md bg-[#F73859] w-fit py-2 px-10'/>
            <button className='rounded-md bg-[#F73859] w-fit py-2 px-10' type="button" onClick={markDone}>{todo.completed ? "Mark as Pending" : "Mark as Completed"}</button>
            <button className='rounded-md bg-[#F73859] w-fit py-2 px-10' type="button" onClick={deleteTodo}>Delete Todo</button>
            
        </div>
          
    </form>
    

    </div>
  )
}

export default EditTaskPage