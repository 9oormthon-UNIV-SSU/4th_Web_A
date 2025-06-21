// 게시글 목록 중 하나를 보여주는 부분분
// props로 post 하나를 받아서 제목/내용 일부/작성일을 보여줌
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostCard = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background: #f3f3f3;
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin: 0 0 4px;
`;

const Content = styled.p`
  margin: 0;
  color: #555;
`;

function PostListItem({ post }) {
  const navigate = useNavigate(); // 클릭 시 상세보기 이동

  return (
    <PostCard onClick={() => navigate(`/post/${post.id}`)}>
      <Title>{post.title}</Title>
      <DateText>{post.date}</DateText> {/* 작성일 */}
      <Content>{post.content.slice(0, 100)}...</Content> {/* 미리보기 */}
    </PostCard>
  );
}

export default PostListItem;
