import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../ui/Header';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Meta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const CommentSection = styled.div`
  margin-top: 30px;
`;

const CommentTitle = styled.h3`
  margin-bottom: 10px;
`;

function PostViewPage({ posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div>
      <Header>{post.title}</Header>
      <Container>
        <Title>{post.title}</Title>
        <Meta>작성일: {post.date}</Meta>
        <Content>{post.content}</Content>
        <Button onClick={() => navigate('/')}>← 뒤로 가기</Button>

        <CommentSection>
          <CommentTitle>댓글</CommentTitle>
          <TextInput
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <Button onClick={handleCommentSubmit}>댓글 작성하기</Button>

          {comments.map((comment, index) => (
            <p key={index}>🗨️ {comment}</p>
          ))}
        </CommentSection>
      </Container>
    </div>
  );
}

export default PostViewPage;
