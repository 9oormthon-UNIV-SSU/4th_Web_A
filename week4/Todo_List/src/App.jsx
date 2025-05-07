import { useState } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'

function App(){
  const[inputValue,setInputValue] = useState('')
  const[todolist,setTodoList]=useState([])
    const addItem =() =>{
      const newItem = {
        id: Date.now(),
        text: inputValue
      };
      setTodoList([...todolist,newItem])
      setInputValue('')
    }

    const removeItem = (idToRemove) => {
      {/*return하는 값에 부합하는 것은 제거되지 않는다*/}
      {/*setTodoList(todolist.filter((_, index) => index !== indexToRemove))*/}
      setTodoList(todolist.filter(item => item.id !== idToRemove))
    }

    return (
      <main>
        <input className='input-button'value={inputValue}type='text' placeholder="할일을 입력하세요" onChange={(e)=>setInputValue(e.target.value)}/>
        <button className='add-button' onClick={addItem}>추가</button>
        <TodoBoard todolist={todolist} removeItem={removeItem}/>
      </main>
    );
}

export default App;