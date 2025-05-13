import TodoItem from "./TodoItem"
import Header from "./Header";

function TodoBoard(props){
    return(
        <div>
            <Header/>
            {/* array에 있는 배열을 하나하나 보여주고 싶을 때*/}
            {/*{props.todolist.map((item, index)=><TodoItem key={index} index={index} item={item} removeItem={props.removeItem}/>)} */}
            <button className={`add-button ${props.filter === 'all' ? 'active' : ''}`} onClick={()=> props.setFilter('all')}>전체</button>
            <button className={`add-button ${props.filter === 'completed' ? 'active' : ''}`} onClick={()=> props.setFilter('completed')}>완료</button>
            <button className={`add-button ${props.filter === 'incomplete' ? 'active' : ''}`} onClick={()=> props.setFilter('incomplete')}>미완료</button>
            {props.todolist.length === 0 ? <p style={{color:"gray"}}>할 일이 없습니다</p> :
            props.todolist.map((item,index) =>(<TodoItem key={index} item={item} removeItem={props.removeItem} toggleCompleted={props.toggleCompleted}/>))}
        </div>
    )
}

export default TodoBoard;