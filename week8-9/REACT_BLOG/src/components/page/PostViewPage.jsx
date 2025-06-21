import { useParams, useNavigate } from 'react-router-dom';   // useParams -> URL에 포함된 파라미터를 가져오기
import { useState } from 'react';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Header from '../ui/Header';
import styled from 'styled-components';

const CommentSection = styled.div`
    margin-top: 32px;
`;

const CommentInputWrapper = styled.div`
    margin-top: 48px;
`;

const Comment = styled.div`
    margin: 12px;
`;

function PostViewPage({ posts, onAddComment }) {          // posts와 댓글 추가 함수 받아옴
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === Number(id));     // 현재 페이지에 해당하는 게시글 객체

    const [newComment, setNewComment] = useState('');       // 댓글 입력창의 텍스트 상태 저장할 state

    const addComment = () => {
    if (newComment.trim()) {
        onAddComment(post.id, newComment);     // 댓글 post에 추가
        setNewComment('');                     // 입력창 비우기
    }
    };

    return (
    <Comment>
        <Header />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Button onClick={() => navigate('/')} label="뒤로 가기" />
        <CommentSection>
            <h3>댓글</h3>
            <CommentList comments={post.comments || []} />
            <CommentInputWrapper>
                <TextInput value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                <Button onClick={addComment} label="댓글 작성하기" />
            </CommentInputWrapper>
        </CommentSection>
    </Comment>
    );
}


export default PostViewPage;

// 개별 게시글, 댓글 목록, 댓글 입력 기능 제공