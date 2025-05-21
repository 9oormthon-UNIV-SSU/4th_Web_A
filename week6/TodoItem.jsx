import React from "react";

function TodoItem(props) {
  const handleToggle = () => {
    props.onToggle(props.index); //App에 있는 toggleDone 함수 호출
  };

  return (
    <div className="todo-item">
        {/*클릭하면 handleToggle을 실행하도록 한다*/}
      <input type="checkbox" checked={props.item.done} onChange={handleToggle}/>
    <span style={{textDecoration:props.item.done?"line-through":"none"}}>
        {props.item.text}
    </span>
      {/*삭제 버튼을 클릭하면 지워지도록 한다*/}
      <button onClick={()=>props.onDelete(props.index)}>삭제</button>
    </div>
  );
}

export default TodoItem;
