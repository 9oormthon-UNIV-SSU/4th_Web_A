import React from "react";

function InputForm({inputValue,setInputValue,addItem,isLoading,error}){
    return(
        <div className="input-area">
            <label htmlFor="todoInput" style={{display:"none"}}>할 일 입력</label>
            <input id="todoInput" type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)} placeholder="할 일을 입력하세요" title="할 일을 입력하는 입력창입니다."/>
           
            <button onClick={()=>addItem(inputValue)} disabled={isLoading}> {/*로딩 중에는 버튼을 비활성화 하도록 한다.*/}
            {isLoading?"0.5초간 로딩 중...":"추가"}
         </button>
         {/*에러 메시지*/}
         {error &&(<p style={{color:'red',marginTop:'8px'}}>입력값이 비었습니다.</p>)}
        </div>
    );
}
export default InputForm;