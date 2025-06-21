import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Header from '../ui/Header';
import styled from 'styled-components';

const Container = styled.div`
    margin: 12px
`;


function PostWritePage({ posts, setPosts }) {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate = useNavigate();

const handleSubmit = () => {                         // 버튼 클릭시 실행
    if (title.trim() && content.trim()) {
    const newPost = {
        id: Date.now(),
        title,
        content,
        comments: []
    };
    setPosts([...posts, newPost]);
    navigate('/');
    }
};

return (
    <Container>
        <Header />
        <TextInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력하세요" />
        <TextInput value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용을 입력하세요" multiline />
        <Button onClick={handleSubmit} label="글 작성하기" />
    </Container>
    );
}

export default PostWritePage;
