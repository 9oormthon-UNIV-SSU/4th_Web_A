import React from "react";
import TodoItem from "./TodoItem";
import Header from "./Header";

function TodoBoard(props) {
  return (
    <div>
      <Header />
      {/*할일이 없으면 메시지가 표시되도록 한다.*/}
      {props.todoList.length === 0 && (
        <p style={{ color: "#888", textAlign: "center" }}>할 일이 없습니다</p>
      )}
      {/*할 일이 있으면 목록을 map으로 렌더링 해준다. TodoItem 컴포넌트에 필요한 데이터를 props로 전달한다.*/}
      {props.todoList.map((item,index)=>(
        <TodoItem key={index} item={item} index={index} onDelete={props.onDelete} onToggle={props.onToggle}/>
      ))}
    </div>
  );
}
export default TodoBoard;
