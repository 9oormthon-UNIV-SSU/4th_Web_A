import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PostItem = styled.div`
    border: 1px solid #ccc;
    padding: 12px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #fff;
    &:hover {
        background-color: #f5f5f5;
    }
`;

const PostTitle = styled.h3`
    margin: 0 0 8px;
    font-size: 18px;
`;

const PostPreview = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`;

function PostListItem({ post }) {
    const navigate = useNavigate();

    return (
        <PostItem onClick={() => navigate(`/post/${post.id}`)}>
            <PostTitle>{post.title}</PostTitle>
            <PostPreview>{post.content.slice(0, 50)}...</PostPreview>
        </PostItem>
    );
}

export default PostListItem;
