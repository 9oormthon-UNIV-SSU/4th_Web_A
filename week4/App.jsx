import React,{useState} from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard"

function App(){
    const[inputValue,setInputValue]=useState('')
    const[todoList,setTodoList]=useState([])
        const addItem=()=>{
            console.log("I'm hererere!",inputValue)
            setTodoList([...todoList,inputValue])
        };
        const deleteItem = (indexToDelete) => {
          const newList = todoList.filter((_, index) => index !== indexToDelete);
          setTodoList(newList);
        };

    return(
        <main>
            <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
            <button onClick={addItem}>추가</button>

            <TodoBoard todoList={todoList} onDelete={deleteItem}/>
        </main>
    );
}
export default App; 