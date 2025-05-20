import React from 'react';

function InputForm({ inputValue, setInputValue, addItem, isLoading, error }) {
  return (
    <div>
      <input
        value={inputValue}
        type="text"
        placeholder="할 일을 입력하세요"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={addItem} disabled={isLoading}>
        {isLoading ? '로딩 중...' : '추가'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default InputForm;