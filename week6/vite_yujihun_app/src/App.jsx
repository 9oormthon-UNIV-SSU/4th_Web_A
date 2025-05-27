import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import TodoBoard from './components/TodoBoard';
import ConfirmModal from './components/ConfirmModal';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('전체');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    const savedList = localStorage.getItem('todos');
    if (savedList) {
      setTodoList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList)); 
  }, [todoList]);

  const addItem = () => {
    if (inputValue.trim() === '') {
      setError('할 일을 입력해주세요.');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: inputValue, isDone: false }
      ]);
      setInputValue('');
      setIsLoading(false);
    }, 500);
  };

  const toggleItem = (id) => {
    setTodoList(
      todoList.map(item =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id) => {
    setDeleteTarget(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setTodoList(todoList.filter(item => item.id !== deleteTarget));
    setModalVisible(false);
    setDeleteTarget(null);
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setDeleteTarget(null);
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
        isLoading={isLoading}
        error={error}
      />

      <div>
        <button className={`btn ${filter === '전체' ? 'active' : ''}`} onClick={() => setFilter('전체')}>전체</button>
        <button className={`btn ${filter === '완료' ? 'active' : ''}`} onClick={() => setFilter('완료')}>완료</button>
        <button className={`btn ${filter === '미완료' ? 'active' : ''}`} onClick={() => setFilter('미완료')}>미완료</button>
      </div>

      {todoList.length === 0 ? (
        <p>할 일이 없습니다</p>
      ) : (
        <TodoBoard
          todoList={filteredList}
          onToggle={toggleItem}
          onDelete={handleDelete}
        />
      )}

      {modalVisible && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </main>
  );
}

export default App;