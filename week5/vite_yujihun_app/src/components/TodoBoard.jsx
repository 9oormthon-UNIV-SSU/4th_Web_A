import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard({ todoList, onToggle, onDelete }) { 
  return (
    <div>
      {todoList.map(item => (
        <TodoItem
          key={item.id}       
          item={item}
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default TodoBoard;
