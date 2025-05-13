import React from "react";

function InputForm(props){
    return(
        <div className="input-area">
            <input type="text" value={props.inputValue} onChange={(event)=>props.setInputValue(event.target.value)}/>
            <button onClick={()=>props.addItem(props.inputValue)}>추가</button>
        `</div>
    );
}
export default InputForm;