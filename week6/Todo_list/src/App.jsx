import { useState, useEffect } from 'react'
import './App.css'
import TodoBoard from './components/TodoBoard'
import Inputform from './components/Inputform'

function App(){
  const[inputValue,setInputValue] = useState('')
  const[todolist,setTodoList]=useState(()=>{
    const saved=localStorage.getItem('todolist'); // 로컬 스토리지에서 초기값을 불러옴
    return saved ? JSON.parse(saved):[];
  });
  const [filter, setFilter] = useState("all"); // all, completed, incomplete
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(null);

  /*  // 초깃값 설정
    useEffect(() => {
      const saved = localStorage.getItem("todolist");
      if (saved) {
        console.log("초깃값")
        setTodoList(JSON.parse(saved));                     // todolist를 배열로 바꾸고 출력해준다
      }
    }, []);    */                                             // 의존성 배열이 변할 때마다 실행 -> 여긴 비어있어서 처음만 실행

    // 변경될 때마다 저장
    useEffect(() => {
      console.log("업데이트된", todolist);
      localStorage.setItem('todolist', JSON.stringify(todolist));     // todolist를 키로 받고 문자열로 바꿔 저장한다
    }, [todolist]);

    const addItem =() =>{
      setIsLoading(true);
      console.log("입력값:", inputValue);      // 입력값 확인
      console.log("기존 리스트:", todolist);   // 기존 상태 확인
      
      const newItem = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };

      setTodoList([...todolist,newItem])
      setInputValue('')
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 0.5초 동안 로딩 표시

      if (inputValue.trim() === "") {
        setIsError(true);
        setTimeout(() => {
          setIsError(false); // 3초 후 에러 메시지 자동 제거
        }, 3000);
        setIsLoading(false);
        setTodoList([...todolist])
      }
    }

    const removeItem = (idToRemove) => {
      {/*return하는 값에 부합하는 것은 제거되지 않는다*/}
      {/*setTodoList(todolist.filter((_, index) => index !== indexToRemove))*/}
      setTodoList(todolist.filter(item => item.id !== idToRemove))
    }

    const toggleCompleted = (id) => {    // 체크하고 해제하는 함수
      setTodoList(
        todolist.map(item => item.id === id ? { ...item, completed: !item.completed } : item)   // completed속성 반전
      )
    }

    const filteredList = todolist.filter(item => {
      if (filter === 'completed') return item.completed;
      if (filter === 'incomplete') return !item.completed;
      return true;
    });

    
    return (
      <main>
        <Inputform value={inputValue} 
                    onChange={(e)=>setInputValue(e.target.value)} 
                    onClick={addItem} 
                    isLoading={isLoading}
                    isError={isError}
        />
        <TodoBoard todolist={filteredList} 
                    removeItem={removeItem} 
                    toggleCompleted={toggleCompleted}
                    filter={filter} 
                    setFilter={setFilter}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
        />
      </main>
    );
}

export default App;