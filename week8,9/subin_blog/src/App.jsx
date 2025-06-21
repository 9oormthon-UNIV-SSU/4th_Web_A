import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import data from './data.json';
import GlobalStyle from './GlobalStyle';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';

function App() {
  const [posts, setPosts] = useState(data);

  // 날짜 기준으로 최신순 정렬 (가장 최근 글이 위에 오도록)
  // toLocaleString()으로 저장된 문자열을 Date로 변환해서 비교하도록 함
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 정렬된 글 목록을 MainPage에 전달 */}
          <Route path="/" element={<MainPage posts={sortedPosts} />} />
          <Route path="/write" element={<PostWritePage posts={posts} setPosts={setPosts} />} />
          <Route path="/post/:id" element={<PostViewPage posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
