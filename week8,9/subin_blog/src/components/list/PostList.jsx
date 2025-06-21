import PostListItem from './PostListItem';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function PostList({ posts }) {
  return (
    <ListContainer>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ListContainer>
  );
}

export default PostList;
