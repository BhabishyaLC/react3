import React from "react";

function TodoList(props) {
  return (
    <li className=" flex justify-center list-none gap-3 mt-3">
      <div className=" border-solid border-2 border-white rounded-xl h-10 pt-2 w-80">
        {props.item}
      </div>
      <button
        className=" rounded-full w-10 bg-red-800 text-3xl"
        onClick={(e) => {
          props.deleteItem(props.index);
        }}
      >
        -
      </button>
    </li>
  )
}

export default TodoList;
