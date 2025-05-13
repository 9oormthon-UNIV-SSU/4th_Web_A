function TodoItem(props){
    const handleRemove =() =>{
        {/*props.removeItem(props.index)*/}
        props.removeItem(props.item.id)
    }

    const handleChange =() => {
        props.toggleCompleted(props.item.id)
    }

    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={handleChange} />
            <span className="coral-text" style={{textDecoration:props.item.completed? 'line-through':'none'}}> {props.item.text} </span> 
            <button className="delete-button" onClick={handleRemove}>삭제</button>
        </div>
    )
}

export default TodoItem;