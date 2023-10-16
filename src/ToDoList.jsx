import { click } from "@testing-library/user-event/dist/click";
import React from "react";

const ToDoList = (props) => {
   
    return (
    <>
    <div className="todostyle">
    <i className="fa-solid fa-trash" 
        onClick={() => {
            props.onSelect(props.id);
        }}>
    </i>
    <li>{props.text}</li>
    </div>
    </>
   );
};

export default ToDoList;