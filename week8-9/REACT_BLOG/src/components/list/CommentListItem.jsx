import styled from 'styled-components';

const CommentBox = styled.li`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
    background-color:rgba(255, 255, 255, 0.99);
    list-style: none;
`;


function CommentListItem({ comment }) {
    return <CommentBox> {comment.content}</CommentBox>;
}

export default CommentListItem;
