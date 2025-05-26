import React from 'react';

function InputForm({ inputValue, setInputValue, addItem }) {
  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={addItem}>
        추가</button>
    </div>
  );
}

export default InputForm;