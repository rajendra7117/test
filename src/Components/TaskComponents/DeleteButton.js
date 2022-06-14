import React from 'react'
import {MdDelete} from 'react-icons/md'
import { tasksSliceActions } from "../../store/tasksSlice";
import DeleteTaskModal from './DeleteTaskModal';
import { useDispatch, useSelector} from "react-redux";

const DeleteButton = () => {
    const dispatch = useDispatch()
  
    const showModal = useSelector((state) => state.tasks.showModal)
    const deleteTask = (e) => {
        e.preventDefault()
       
          dispatch(tasksSliceActions.displayModal())
      };

     
  return (
        <div className='delete-button-div'>
        <button className="delete-button" data-tooltip="Delete this task" onClick={deleteTask} >
          <MdDelete />
          
        </button>
        {showModal &&  <DeleteTaskModal />}
        </div>
    
  )
}

export default DeleteButton