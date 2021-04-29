import CommentList from './CommentList';
import AddComment from './AddComment';
import { useState } from 'react';

const PostList = ({ posts, comments, addComment, users, addLike }) => {
    const [showComments, setShowComments] = useState(false);
    return (
    <div className="posts">
      {posts.map((post) => (
          <div className="post" key={post.id} >
            <h3 className="post__heading">{post.title}</h3>
          <b> By: {users[post.userId].name}</b> 
            <p className="post__content">{post.content}</p>
            <div className="post__action-items">
              <button className="post__like-btn"  onClick={() => addLike({ postId: post.id })}>Like</button>
            </div>
            <div className="post__action-items">
              <button className="post__comment-btn" onClick={() => setShowComments(!showComments)}>Comment</button>
            </div>
            <b> Liked by : {post.likedUsers.map((userId) => ( <b> {users[userId].name} </b>))}</b>
            {showComments && <AddComment forItem="post" forId={post.id}  addComment={addComment} placeholder="Comment on post" />}
            <CommentList
              addComment={addComment} 
              allComments={comments} 
              comments={comments.filter((comment) => comment.forItem === "post" && comment.forId.toString() === post.id.toString())} 
              users={users}  
            />
          </div>
        ))}
    </div>
  )
    }

export default PostList;