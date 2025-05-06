function TodoItem(props){
    const handleRemove =() =>{
        {/*props.removeItem(props.index)*/}
        props.removeItem(props.item.id)
    }

    return(
        <div className="todo-item">
            <span className="coral-text"> {props.item.text} </span> 
            <p>
            <button className="delete-button" onClick={handleRemove}>삭제</button>
            </p>
        </div>
    )
}

export default TodoItem;