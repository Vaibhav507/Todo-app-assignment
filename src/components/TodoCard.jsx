import React from 'react'
import { Link } from "react-router-dom";

const TodoCard = ({title, completed, description, id}) => {
  return (
    <div className='bg-[#404B69] rounded-lg p-5 text-[#DBEDF3]'>
        <div className="flex justify-between items-center pb-5">
            <p className='text-xl font-bold'>{title}</p>
            <p className='text-black-400'>{completed ? "Completed" : "Pending"}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{description}</p>
          <div className="bg-[#F73859] rounded-full font-bold px-10 py-2 w-fit cursor-pointer text-[#DBEDF3]" >
            <Link to={`/edit/${id}`}>Edit</Link>
          </div>
        </div>
        
    </div>
  )
}

export default TodoCard