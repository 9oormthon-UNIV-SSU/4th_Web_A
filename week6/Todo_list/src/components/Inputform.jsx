
function Inputform(props){
    return(
        <div>
            <input className="input-button" value={props.value} type='text' placeholder="할일을 입력하세요" onChange={props.onChange}/>
            <button type="button" className="add-button" onClick={props.onClick} disabled={props.isLoading}>추가</button>
            {props.isLoading && <p style={{color:'gray'}}> 로딩 중...</p>}
            {props.isError && <p className="error">입력값을 입력하세요</p>}
        </div>
    )
}

export default Inputform
