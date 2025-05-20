import React from 'react';

function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>삭제하시겠습니까?</p>
        <button onClick={onConfirm} className="btn">확인</button>
        <button onClick={onCancel} className="btn">취소</button>
      </div>
    </div>
  );
}

export default ConfirmModal;
