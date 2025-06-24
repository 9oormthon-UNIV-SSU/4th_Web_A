// 글 작성 페이지 
// 사용자가 제목과 내용을 입력해 새 글을 추가할 수 있음
// props로 posts와 setPosts를 전달받아 상태 관리
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../ui/Header';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import styled from 'styled-components';

// 전체 레이아웃 스타일
const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

function PostWritePage({ posts, setPosts }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태

  // 글 작성 완료 버튼 클릭 시 실행
  const handleWrite = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    // 새 글 생성: 작성 시간 포함하도록 함함
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      date: new Date().toLocaleString(),
    };

    // 글 목록에 추가 후 메인으로 이동
    setPosts([newPost, ...posts]);
    navigate('/');
  };

  return (
    <>
      <Header>글 작성하기</Header>
      <Container>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <TextInput
          as="textarea"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <Button onClick={handleWrite}>작성 완료</Button>
      </Container>
    </>
  );
}

export default PostWritePage;
