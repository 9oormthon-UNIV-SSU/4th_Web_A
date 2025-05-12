import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('전체');

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        text: inputValue,
        isDone: false
      }
    ]);
    setInputValue('');
  };

  const toggleItem = (id) => {
    setTodoList(
      todoList.map(item =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const filteredList = todoList.filter(item => {
    if (filter === '완료') return item.isDone;
    if (filter === '미완료') return !item.isDone;
    return true;
  });

  return (
    <main>
      <Header />
      <InputForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        addItem={addItem}
      />

      <div>
        <button
          className={`btn ${filter === '전체' ? 'active' : ''}`}
          onClick={() => setFilter('전체')}>전체</button>
        <button
          className={`btn ${filter === '완료' ? 'active' : ''}`}
          onClick={() => setFilter('완료')}>완료</button>
        <button
          className={`btn ${filter === '미완료' ? 'active' : ''}`}
          onClick={() => setFilter('미완료')}>미완료</button>
      </div>

      {todoList.length === 0 ? (
        <p>할 일이 없습니다</p>
      ) : (
        <TodoBoard
          todoList={filteredList}
          onToggle={toggleItem}
          onDelete={deleteItem}
        />
      )}
    </main>
  );
}

export default App;