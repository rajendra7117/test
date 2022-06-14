import React from "react";
import './ToolTip.css'
import { IoMdArrowDropdown } from "react-icons/io";

const ToolTip = ({ text }) => {
  return (
    <div className="tool-tip">
      <div>
        <span>{text}</span>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};

export default ToolTip;
