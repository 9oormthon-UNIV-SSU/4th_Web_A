import { useNavigate } from 'react-router-dom';
import PostList from '../list/PostList';
import Button from '../ui/Button';
import Header from '../ui/Header';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1000px;   // 콘텐츠 최대 너비
    margin: 0 auto;       // 좌우 중앙 정렬
    padding: 32px 16px;   // 여백
`;

function MainPage({ posts }) {         // 게시글 배열 받아오기
const navigate = useNavigate();
    return (
        <Container>
            <Header />
            <Button onClick={() => navigate('/write')} label="글 작성하기" />       
            <PostList posts={posts} />
        </Container>
    );
}

export default MainPage;

// 헤더(블로그 이름), 글 작성 버튼 --> 경로 이동, 글 목록 -> postlist