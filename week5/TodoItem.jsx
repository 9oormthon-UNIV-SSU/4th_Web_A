import React from "react";

function TodoItem(props) {
  const handleToggle = () => {
    props.onToggle(props.index);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.done} onChange={handleToggle}/>
    <span style={{textDecoration:props.item.done?"line-through":"none"}}>
        {props.item.text}
    </span>
      <button onClick={()=>props.onDelete(props.index)}>삭제</button>
    </div>
  );
}

export default TodoItem;
