import React, { useState } from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import InputForm from "./components/InputForm";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('ALL');  // 필터 상태 추가

  const addItem = (item) => {
    if (inputValue.trim() !== '') {  //빈칸이 아닐때만
      setTodoList([...todoList, { text: item, done: false }]);
      setInputValue('');
    }
  };
  const deleteItem = (indexToDelete) => {
    const newList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(newList);
  };
  const toggleDone = (index) => {
    const newList = [...todoList];
    newList[index].done = !newList[index].done;
    setTodoList(newList);
  };
//필터링
  const getFilteredList = () => {
    if (filter === 'ALL') return todoList;
    if (filter === 'DONE') return todoList.filter((item) => item.done);
    if (filter === 'NOT_DONE') return todoList.filter((item) => !item.done);
  };
  return (
    <main>
      <InputForm inputValue={inputValue} setInputValue={setInputValue} addItem={addItem}/>
      <div className="filter-buttons">
        <button 
          className={filter === 'ALL' ? 'active' : ''} 
          onClick={() => setFilter('ALL')}
        >
          전체
        </button>
        <button 
          className={filter === 'DONE' ? 'active' : ''} 
          onClick={() => setFilter('DONE')}
        >
          완료
        </button>
        <button 
          className={filter === 'NOT_DONE' ? 'active' : ''} 
          onClick={() => setFilter('NOT_DONE')}
        >
          미완료
        </button>
      </div>

      <TodoBoard todoList={getFilteredList()} onDelete={deleteItem} onToggle={toggleDone} />
    </main>
  );
}
export default App;
