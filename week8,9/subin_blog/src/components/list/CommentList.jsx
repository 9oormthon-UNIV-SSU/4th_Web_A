import CommentListItem from "./CommentListItem";

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, idx) => (
        <CommentListItem key={idx} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
