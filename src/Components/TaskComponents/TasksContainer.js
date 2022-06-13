import React from "react";
import "./TasksContainer.css";
import TaskForm from "./TaskForm";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import Task from "./Task";
import { tasksSliceActions } from "../../store/tasksSlice";

const TasksContainer = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
const isEditing = useSelector((state) => state.tasks.isEditing)
const showTasks = useSelector((state) => state.tasks.showTasks)
const showForm = useSelector((state) => state.tasks.showForm)


const dispatch = useDispatch()



  const toggleForm = (e) => {
    dispatch(tasksSliceActions.showForm())
    dispatch(tasksSliceActions.hideTasks())
   

  };
  
 
  return (
    <div className="taskscontainer">
      <div className="sec-1">
        <div className="tasks">Tasks {tasks.length}</div>
        <button className="plus" onClick={toggleForm}>
          <HiOutlinePlusSm />
        </button>
      </div>
      {showForm && (
        <TaskForm
          count={tasks.length}
          toggleForm={toggleForm}
          isEditing={isEditing}
         
        />
      )}
      {showTasks && (
        <>
          {tasks.map((task) => (
            <Task
              key={Math.random(0, 10000)}
              desc={task.taskDesc}
              date={task.assignedDate}
              task={task}
           
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TasksContainer;
