import React from 'react'
import Modal from '../UI/Modal'
import { useDispatch} from 'react-redux'
import { tasksSliceActions } from '../../store/tasksSlice'

const DeleteTaskModal = () => {

    const dispatch = useDispatch()
  return (
    <Modal>
        <div className='delete-modal'>
            <h3>Are you sure you want to delete this task</h3>
            <div className='delete-buttons'>
                <button onClick={(() => {dispatch(tasksSliceActions.hideModal())})}>Cancel</button>
                <button onClick={(() => {dispatch(tasksSliceActions.deleteTask())})}>Yes</button>
            </div>
        </div>
    </Modal>
  )
}

export default DeleteTaskModal