import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

function TodoBoard(props) {
  return (
    <div>
      <Header />
      {props.todoList.length === 0 && (
        <p style={{ color: "#888", textAlign: "center" }}>할 일이 없습니다</p>
      )}
      {props.todoList.map((item,index)=>(
        <TodoItem key={index} item={item} index={index} onDelete={props.onDelete} onToggle={props.onToggle}/>
      ))}
    </div>
  );
}
export default TodoBoard;
