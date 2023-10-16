import React, { useState } from "react";
import ToDoList from "./ToDoList";

    const App = () => {

    const [InputList, setInputList] = useState();
    const [itemList, setitemList] = useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const submitList = () => {
        setitemList((oldItems) => {
            return [...oldItems, InputList];
        });
    };
    
    const deleteItem = (id) => {
        
        setitemList((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            });
        });
    };

        
    return(
    <>
    <div className="main-div">
        <div className="center-div">
            <h1>Todo List</h1>
            <br/>
            <input type="text" placeholder="Add an items" onChange={itemEvent}/> 
            <button type="submit" onClick={submitList}> + </button>
            <br/><br/>
            <ol>
                {itemList.map((items, index) => {
                    return <ToDoList
                        key = {index}
                        id = {index}
                        text = {items}
                        onSelect = {deleteItem}
                    />;
                })}
            </ol>
        </div>
    </div>
    </>
    );
};

export default App;
