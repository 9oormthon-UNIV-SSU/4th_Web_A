import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainPage from './components/page/MainPage';
import PostViewPage from './components/page/PostViewPage';
import PostWritePage from './components/page/PostWritePage';
import data from './data.json';

function App() {
  const [posts, setPosts] = useState(data);

  const addCommentToPost = (postId, commentContent) => {
    const newComment = { id: Date.now(), content: commentContent };

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...(post.comments || []), newComment] }
          : post
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route path="/post/:id" element={<PostViewPage posts={posts} onAddComment={addCommentToPost}/>} />
        <Route path="/write" element={<PostWritePage setPosts={setPosts} posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
