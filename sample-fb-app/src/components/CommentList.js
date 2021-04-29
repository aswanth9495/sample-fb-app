import { useState } from 'react';
import AddComment from './AddComment';

const CommentList = ({ comments, allComments, addComment, users }) => {
  const [showCommentBox, setShowCommentBox] = useState(false)
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comments__item" key={comment.id}>
          {users[comment.userId].name} Says: {comment.comment}
          <b href="" onClick={() => setShowCommentBox(!showCommentBox)}> Reply</b>
          {showCommentBox && <AddComment forItem="comment" forId={comment.id}  addComment={addComment} placeholder="Reply" />}
          <CommentList 
            addComment={addComment} 
            allComments={allComments} 
            comments={allComments.filter((subComment) => subComment.forItem === "comment" && subComment.forId.toString() === comment.id.toString())} 
            users={users}
          />
        </div>
      ))}
    </div>
  )
}

export default CommentList;