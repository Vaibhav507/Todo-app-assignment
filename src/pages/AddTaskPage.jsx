import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../redux/todoSlice';

const AddTaskPage = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch()


    const navigate = useNavigate()
  
    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addTodo({title,description}));
        setTitle('');
        setDescription('');
        navigate('/')
    }
  
    return (

    <div className="flex flex-col gap-10 mx-auto w-3/6 ">
    <p className='text-5xl uppercase tracking-widest mt-20 text-[#DBEDF3] text-center'>Add Todos</p>

    <form onSubmit={onSubmitForm} className='flex flex-col gap-5 pb-20 text-[#DBEDF3]'>
        <div className="flex flex-col gap-2">
            <label>Title</label>
            <input type="text" placeholder='Add a title' value={title} onChange={(e) => setTitle(e.target.value)} className='rounded-md p-2 bg-[#404B69]' />
        </div>
        <div className="flex flex-col gap-2">
            <label>Description</label>
            <textarea name="" id="" className='rounded-md p-2 bg-[#404B69]' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Add a description'></textarea>
        </div>
        <input type="submit" value="Submit" className='rounded-md bg-[#F73859] w-fit py-2 px-10'/>
        
    </form>

    </div>
    
    
  )
}

export default AddTaskPage