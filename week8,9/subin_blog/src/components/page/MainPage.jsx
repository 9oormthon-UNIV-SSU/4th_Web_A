// 블로그 메인 페이지
// 전체 게시글 목록을 보여주고, 글 작성 페이지로 이동 가능
// props로 posts를 전달받음
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../ui/Header';
import Button from '../ui/Button';
import PostList from '../list/PostList';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

function MainPage({ posts }) {
  const navigate = useNavigate();

  return (
    <div>
      <Header>Mini Blog</Header>
      <Container>
        <TopBar>
          <Button onClick={() => navigate('/write')}>글 작성하기</Button>
        </TopBar>
        <PostList posts={posts} /> {/* 전체 글 목록 표시 */}
      </Container>
    </div>
  );
}

export default MainPage;
