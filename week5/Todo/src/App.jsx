import { useState } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'
import Inputform from './components/Inputform'

function App(){
  const[inputValue,setInputValue] = useState('')
  const[todolist,setTodoList]=useState([])
  const [filter, setFilter] = useState("all"); // all, completed, incomplete



    const addItem =() =>{
      console.log("입력값:", inputValue);      // 입력값 확인
      console.log("기존 리스트:", todolist);   // 기존 상태 확인
      
      const newItem = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodoList([...todolist,newItem])
      setInputValue('')
    }

    const removeItem = (idToRemove) => {
      {/*return하는 값에 부합하는 것은 제거되지 않는다*/}
      {/*setTodoList(todolist.filter((_, index) => index !== indexToRemove))*/}
      setTodoList(todolist.filter(item => item.id !== idToRemove))
    }

    const toggleCompleted = (id) => {
      setTodoList(
        todolist.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
      )
    }

    const filteredList = todolist.filter(item => {
      if (filter === 'completed') return item.completed;
      if (filter === 'incomplete') return !item.completed;
      return true;
    });
    
    return (
      <main>
        <Inputform value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onClick={addItem}/>
        <TodoBoard todolist={filteredList} removeItem={removeItem} toggleCompleted={toggleCompleted} filter={filter} setFilter={setFilter}/>
      </main>
    );
}

export default App;