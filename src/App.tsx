import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

/* Header Component */
import Header from './assets/components/Header';
import KakaoCallback from './pages/auth/Social/KakaoCallback'; 
import NaverCallback from './pages/auth/Social/NaverCallback';
/* Pages */
import HomePage from './pages/main/home/HomePage';
import TicketPage from './pages/main/ticket/TicketPage';
import ReviewsPage from './pages/main/reviews/ReviewsPage';
import NoticesPage from './pages/main/notices/NoticesPage';
import AuthPage from './pages/auth/AuthPage';
import MyPage from './pages/mypage/MyPage';
import RequestDetailPage from './pages/request/RequestDetailPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* 공통 Header */}
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/requests/:requestId" element={<RequestDetailPage />} />
            <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
            <Route path="/auth/naver/callback" element={<NaverCallback />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;