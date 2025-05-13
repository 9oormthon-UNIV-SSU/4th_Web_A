
function Inputform(props){
    return(
        <div>
            <input className="input-button" value={props.value} type='text' placeholder="할일을 입력하세요" onChange={props.onChange}/>
            <button type="button" className="add-button" onClick={props.onClick}>추가</button>
        </div>
    )
}

export default Inputform
