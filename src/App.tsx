import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

/* Header Component */
import Header from './assets/components/Header';

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
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;