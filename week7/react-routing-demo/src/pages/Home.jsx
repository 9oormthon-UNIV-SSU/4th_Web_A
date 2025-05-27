import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const [word, setWord] = useState('');

  console.log(import.meta.env);

  const onClickWord = () => {
    navigate(`/test?sword=${word}`);
  }

  return (
    <div className="page-container" style={{ fontSize: "32px" }}>
      <span>홈화면 입니다.</span>
      <span className="Name">20201864 유지훈</span>
    </div>
  );
}