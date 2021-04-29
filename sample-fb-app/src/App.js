
import { useEffect, useState } from 'react';

import PostList from './components/PostList';
import AddPost from './components/AddPost';

import './App.css';
import data from './data/pageData.json';

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState({})
  const [currentUser, setcurrentUser] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetching the data and storing it
    setPosts(data["posts"])
    setUsers(data["users"])
    setcurrentUser(data["currentUser"])
    setComments(data["comments"])
    console.log(data["comments"]);
  }, [])

  const addComment = ({ forItem, forId, comment }) => {
    console.log({ forItem, forId, comment });
    setComments((comments) => {
      return ([...comments,{
      userId: currentUser,
      id: Math.floor(Math.random()*100000),
      comment: comment,
      forItem: forItem,
      forId: forId,
    }])
  })
  }

  const addLike = ({ postId }) => {
    const post = posts.find((post) => post.id = postId);
    const newPosts = posts.filter((post) => post.id !== postId);
    if (!post.likedUsers.includes(currentUser)) {
      setPosts([...newPosts, {
        ...post,
        likedUsers: [
          ...post.likedUsers, 
          currentUser,
        ]
      }])
      console.log([...newPosts, {
        ...post,
        likedUsers: [
          ...post.likedUsers, 
          currentUser,
        ]
      }]);
    }
  }

  const handleAddPost = ({ title, content }) => {
    setPosts((posts) => ([...posts, {
      userId: currentUser,
      id: Math.floor(Math.random()*100000),
      content: content,
      title: title,
      likedUsers: [],
    }]))
  }

  return (
    <div className="App">
      <AddPost handleAddPost={handleAddPost} />
      <PostList posts={posts} comments={comments}  addComment={addComment} users={users} addLike={addLike} />
    </div>
  );
}

export default App;
