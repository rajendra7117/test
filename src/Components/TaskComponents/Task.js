import React from 'react'
import {MdModeEditOutline} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { useDispatch } from 'react-redux/es/exports'
import { tasksSliceActions } from '../../store/tasksSlice'
const Task = ({desc, date, task}) => {

    const dispatch = useDispatch()

    const editTask = e => {
            dispatch(tasksSliceActions.editingTask(task))
            dispatch(tasksSliceActions.editing())
            dispatch(tasksSliceActions.showForm())
            dispatch(tasksSliceActions.hideTasks())
    }
  return (
    <div className='task'>
        <div className='profile'>
            <CgProfile />
        </div>
        <div className='task-info'>
            <h5>{desc}</h5>
            <h6>{date}</h6>
        </div>
        <div className='icons'>
        <MdModeEditOutline onClick={editTask}/>


        </div>
    </div>
  )
}

export default Task