function TodoItem(props){
    const handleRemove =() =>{
        {/*props.removeItem(props.index)*/}
        props.setIsModalOpen(props.item.id)
    }

    const handleChange =() => {
        props.toggleCompleted(props.item.id)
    }

    const confirmDelete = () => {
        props.removeItem(props.item.id)
        props.setIsModalOpen(null);
    };

    const cancelDelete = ()=>{
        props.setIsModalOpen(null)
    };

    const isModalOpen = props.isModalOpen === props.item.id;

    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={handleChange} />
            <span className="coral-text" style={{textDecoration:props.item.completed? 'line-through':'none'}}> {props.item.text} </span> 
            <button className="delete-button" onClick={handleRemove}>삭제</button>
            {isModalOpen && (
                <div className="modal">
                    <p>삭제하시겠습니까?</p>
                    <button onClick={confirmDelete} className="add-button">확인</button>
                    <button onClick={cancelDelete} className="add-button">취소</button>
                </div>
            )}
        </div>
    )
}

export default TodoItem;