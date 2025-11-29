import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="nav">
        <Link to="/">회사 소개</Link>
        <Link to="/ticket">티켓팅 하기</Link>
        <Link to="/reviews">이용 후기</Link>
        <Link to="/notices">공지사항</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/auth">로그인 / 회원가입</Link>
      </nav>
    </header>
  );
};

export default Header;