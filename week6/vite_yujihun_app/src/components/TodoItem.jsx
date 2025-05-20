import React from 'react';

function TodoItem({ item, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => onToggle(item.id)}
      />
      <span
        className={item.isDone ? 'todo-done' : ''}
        style={{ marginLeft: '8px', marginRight: '8px' }}>
        {item.text}
      </span>
      <button className="delete-button" onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;