import PostListItem from './PostListItem';
import styled from 'styled-components';

const WholePost = styled.div`
    list-style: none;
    padding: 0;
    margin: 0px auto;
`;

function PostList({ posts }) {
return (
    <WholePost>
    {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
    ))}
    </WholePost>
);
}

export default PostList;
