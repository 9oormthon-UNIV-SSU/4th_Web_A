import CommentListItem from './CommentListItem';
import styled from 'styled-components';

const CommentListContainer = styled.ul`
    list-style: none;
    padding: 0;
`;

function CommentList({ comments }) {
    return (
    <CommentListContainer>
        {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
        ))}
    </CommentListContainer>
    );
}

export default CommentList;



