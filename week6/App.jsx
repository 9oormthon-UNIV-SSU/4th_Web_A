import React, { useState,useEffect} from 'react';
import './App.css';
import TodoBoard from "./components/TodoBoard";
import InputForm from "./components/InputForm";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState(()=>{
    const saved=localStorage.getItem('todoList'); //1. 로컬 스토리지에서 초기값을 불러오도록 한다.
    return saved ? JSON.parse(saved):[];
  });
  const [filter, setFilter] = useState('ALL');  // 필터 상태 추가
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(false); //에러 상태 추가
  const [isModalOpen,setIsModalOpen]=useState(false); //삭제 모달 관련
  const [pendingDeleteIndex,setPendingDeleteIndex]=useState(null);//삭제 모달 관련
 
  //1. todoList가 바뀔 때마다 로컬스토리지에 저장한다.
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todoList));
  },[todoList]);
 
  const addItem = (item) => {
    if (item.trim()==''){//빈칸이 아닐때만
      setError(true); //에러가 발생한다면
      setTimeout(()=>setError(false),3000); //3초 동안 있다가 사라짐
      return;
    }
    setIsLoading(true); 
    setTimeout(()=>{
      setTodoList([...todoList, { text: item, done: false }]);
      setInputValue(''); //입력후에 입력창을 지우도록 한다.
      setIsLoading(false);
    },500);
  };
  const confirmDelete=(index)=>{
    setPendingDeleteIndex(index); //삭제할 인덱스를 저장한다.
    setIsModalOpen(true); // 삭제 모달을 연다.
  };
  const deleteItem = (indexToDelete) => {  //indexToDelete는 삭제할 인덱스 번호이다.
    const newList = todoList.filter((_, index) => index !== indexToDelete);  //.filter로 해당 인덱스가 아닌 항목만 남긴다. 
    setTodoList(newList); //그리고 새로운 리스트로 setTodoList를 업데이트한다.
    setIsModalOpen(false); //모달을 닫는다.
    setPendingDeleteIndex(null);  //삭제할 인덱스를 담아두었던 것을 삭제한다.
};

  //체크박스 상태를 변경하는 함수이다.
  const toggleDone = (index) => {  //여기서 index는 클릭한 체크박스의 항목 번호이다.
    const newList = [...todoList];  //기존 배열을 복사한다.
    newList[index].done = !newList[index].done; //.done의 값을 반대로 뒤집는다.
    setTodoList(newList); //그리고 상태를 업데이트한다.
  };
//필터링
  const getFilteredList = () => {
    if (filter === 'ALL') return todoList;
    if (filter === 'DONE') return todoList.filter((item) => item.done);
    if (filter === 'NOT_DONE') return todoList.filter((item) => !item.done);
    return todoList;
  };
  return (
    <main>
      <InputForm inputValue={inputValue} setInputValue={setInputValue} addItem={addItem} isLoading={isLoading} error={error}/>
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
      {/*클릭하면 setfilter가 실행되면서 상태가 변경되도록 했다. 그리고 현재 선택된 필터가 acive클래스에 추가되도록 한다.*/}
      {/* getFilteredList()에서 반환된 항목들을 props로 전달한다.*/}
      <TodoBoard todoList={getFilteredList()} onDelete={confirmDelete} onToggle={toggleDone} />  {/*onDelete는 삭제 함수, onToggle은 완료 상태 변경 함수이다.*/}
      {/*삭제 확인 모달*/}
      {isModalOpen && (<div className="modal"><div className="modal-content"><p>삭제하시겠습니까?</p><div className="modal-buttons"><button onClick={()=>deleteItem(pendingDeleteIndex)}>확인</button><button onClick={()=>setIsModalOpen(false)}>취소</button></div></div></div>)}
    </main>
  );
}
export default App;