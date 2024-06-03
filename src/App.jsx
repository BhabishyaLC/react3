import React, { useState } from "react";
import TodoList from "../components/TodoList";
import "./App.css";

function App() {
  const [input, setInput] = useState(" ");
  const [list, setList] = useState([]);
  let addList = (input) => {
    if(input!==" ")
      {
    setList([...list, input]);
      }
  };
  const deleteItem=(key)=>{
    let newList=[...list]
  newList.splice(key,1)                                         
  setList([...newList])
  }
  return (
    <>
      <div className="w-full h-screen bg-slate-600">
        <fieldset className="border-solid border-2 h-screen ml-80 mr-80 bg-gray-800">
          <h1 className="text-center text-white text-3xl">
            Create your own Todo list here!
          </h1>
          <div className="flex justify-center gap-3">
            <input
              type="text"
              className="border-solid border-2 border-black rounded-md pl-3 w-72 mt-10 h-10"
              value={input}
              placeholder="Enter your Todo here"
              onChange={(e) => {
                setInput(e.target.value);
              }}
             
            />
            <button
              className=" rounded-full w-10 text-red-950 bg-green-400 text-2xl mt-10"
              onClick={() => {
                addList(input);
                setInput(" ");
              }}
            >
              +
            </button>
          </div>
          <div>
            <h1 className="text-2xl text-white text-center mt-16">
              Todo Lists
            </h1>
          </div>
          <hr />
          <div className="h-96 mt-5 text-white text-center">
          {list.map((listItem,i)=>{
                  return(
                    
                   <TodoList key={i} index={i} item={listItem} deleteItem={deleteItem}/>
                    
                  )
                })}
           
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default App;
