import React, { useState, useEffect } from "react";
import { MdOutlinePermContactCalendar, MdDelete } from "react-icons/md";
import { users } from "../../lib/users";
import useInput from "../../hooks/UseInput";
import { tasksSliceActions } from "../../store/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import "./TaskForm.css";

import InputField from "./InputField";
import DeleteTaskModal from "./DeleteTaskModal";
const TaskForm = ({ toggleForm }) => {
  const editingTask = useSelector((state) => state.tasks.editingTask);
 
  const isEditing = useSelector((state) => state.tasks.isEditing);
  const [errorState, setErrorState] = useState(false);
  const showModal = useSelector((state) => state.tasks.showModal)
  const dispatch = useDispatch();

  const {
    enteredInput: taskInput,

    inputhandler: taskInputHandler,
    inputBlurHandler: taskInputBlurHandler,
    inputHasError: taskInputHasError,
  } = useInput(isEditing ? editingTask.taskDesc : "");

  const {
    enteredInput: dateInput,

    inputhandler: dateInputHandler,
    inputBlurHandler: dateInputBlurHandler,
    inputHasError: dateInputHasError,
  } = useInput(isEditing ? editingTask.assignedDate : "");
  const {
    enteredInput: timeInput,

    inputhandler: timeInputHandler,
    inputBlurHandler: timeInputBlurHandler,
    inputHasError: timeInputHasError,
  } = useInput(isEditing ? editingTask.assignedTime : "");
  const {
    enteredInput: userInput,

    inputhandler: userInputHandler,
    inputBlurHandler: usereInputBlurHandler,
    inputHasError: userInputHasError,
  } = useInput(isEditing ? editingTask.assignedTo : "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      taskInputHasError ||
      dateInputHasError ||
      timeInputHasError ||
      userInputHasError
    ) {
      setErrorState(true);
      return;
    }
    if (
      taskInput === "" ||
      dateInput === "" ||
      timeInput === "" ||
      userInput === ""
    ) {
      setErrorState(true);
      return;
    }

    if (isEditing) {
      let task = {
        id: editingTask.id,
        taskDesc: taskInput,
        assignedDate: dateInput,
        assignedTime: timeInput,
        assignedTo: userInput,
      };
      dispatch(tasksSliceActions.editTask({ id: editingTask.id, task: task }));
      dispatch(tasksSliceActions.notEditing());
      dispatch(tasksSliceActions.hideForm());
      dispatch(tasksSliceActions.showTasks());
    } else {
      let task = {
        id: `${taskInput}${Math.random(0, 1000)}`,
        taskDesc: taskInput,
        assignedDate: dateInput,
        assignedTime: timeInput,
        assignedTo: userInput,
      };
      dispatch(tasksSliceActions.addTask(task));
      dispatch(tasksSliceActions.hideForm());
      dispatch(tasksSliceActions.showTasks());
    }
  };


  const deleteTask = (e) => {
    e.preventDefault()
    console.log('delete')
      dispatch(tasksSliceActions.displayModal())
  };

  useEffect(() => {
    setErrorState(false);
  }, [taskInput, dateInput, timeInput, userInput]);

  useEffect(() => {
  
  }, [isEditing, editingTask]);

  const cancelForm = (e) => {
    e.preventDefault()
    if (isEditing) {
      dispatch(tasksSliceActions.notEditing());
      dispatch(tasksSliceActions.hideForm());
      dispatch(tasksSliceActions.showTasks());
    } else {
      dispatch(tasksSliceActions.hideForm());
      dispatch(tasksSliceActions.showTasks());
    }
  };

  let userClass = `input-div`;
  if (userInputHasError) {
    userClass = `input-div error`;
  }

  return (
    <div className="task-form">
      <form className={`sec-2`} onSubmit={submitHandler}>
        <InputField
          label="Task description"
          type="text"
          placeholder="Enter a task"
          icon={<MdOutlinePermContactCalendar />}
          onChange={taskInputHandler}
          onBlur={taskInputBlurHandler}
          hasError={taskInputHasError}
          value={taskInput}
        />
        <div className="date-time">
          <InputField
            label="Date"
            type="Date"
            placeholder={"Select a date"}
            onChange={dateInputHandler}
            onBlur={dateInputBlurHandler}
            hasError={dateInputHasError}
            value={dateInput}
          />

          <InputField
            label="Time"
            type="Time"
            placeholder={"Pick time"}
            onChange={timeInputHandler}
            onBlur={timeInputBlurHandler}
            hasError={timeInputHasError}
            value={timeInput}
          />
        </div>
        <div className={userClass}>
          <label>User</label>
          <select
            id="cars"
            name="carlist"
            form="carform"
            onChange={userInputHandler}
            onBlur={usereInputBlurHandler}
            value={userInput}
          >
            <option value="volvo">Assign-to-user</option>
            {users?.map((option) => (
              <option key={option.id}>{option.name}</option>
            ))}
          </select>
          <span className="error-msg">
            <h5>This field should not be empty</h5>
          </span>
        </div>
        {errorState && (
          <div className="error-div">
            <span>
              <h4>Please check all input fields</h4>
            </span>
          </div>
        )}
        {isEditing && (
          <button className="delete-button" onClick={deleteTask}>
            <MdDelete />
          </button>
        )}
        <div className="buttons-div">
          <button onClick={cancelForm}>Cancel</button>
          <button>Save</button>
        </div>
        {showModal &&  <DeleteTaskModal />}
       
      </form>
    </div>
  );
};

export default TaskForm;
