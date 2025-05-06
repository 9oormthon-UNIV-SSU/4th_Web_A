import TodoItem from "./TodoItem"

function TodoBoard(props){
    return(
        <div>
            <h1 style={{color:"lightcoral"}}>Todo List</h1>
            {/* array에 있는 배열을 하나하나 보여주고 싶을 때*/}
            {/*{props.todolist.map((item, index)=><TodoItem key={index} index={index} item={item} removeItem={props.removeItem}/>)} */}
            {props.todolist.map(item =>(<TodoItem key={item.id} item={item} removeItem={props.removeItem}/>))}
        </div>
    )
}

export default TodoBoard;