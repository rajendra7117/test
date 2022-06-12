import React, { useState } from "react";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import {BiCalendar} from 'react-icons/bi'
import {FiClock} from 'react-icons/fi'
import {TiArrowSortedUp, TiArrowSortedDown} from 'react-icons/ti'
import "./TaskForm.css";

import { HiOutlinePlusSm } from "react-icons/hi";
const TaskForm = () => {
  const [showForm, setShowForm] = useState(false);
  const openForm = (e) => {
    setShowForm(prev => !prev);
  };
  return (
    <div className="task-form">
      <div className="sec-1">
        <div className="tasks">Tasks 0</div>
        <button className="plus" onClick={openForm}>
          <HiOutlinePlusSm />
        </button>
      </div>
      <div className={`sec-2 ${showForm ? 'active' : ''}`}>
        <div className="input-div">
          <label>Task Description</label>
          <MdOutlinePermContactCalendar />
          <input type="text" placeholder="Enter a task" />
        </div>
        <div className="date-time">
          <div className="input-div">
            <label>Date</label>
            <BiCalendar />
            <input type="text" placeholder="Enter a task" />
          </div>
          <div className="input-div">
            <label>Time</label>
            <FiClock />
            <input type="text" placeholder="Enter a task" />
          </div>
        </div>
        <div className="input-div">
          <label>Assign User</label>
          <div className="svg-div">
          <TiArrowSortedUp />
                <TiArrowSortedDown />
               
          </div>
          <input type="text" placeholder="Enter a task" />
        </div>
        <div className="buttons-div">
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
