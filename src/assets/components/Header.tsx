// /src/assets/components/Header.tsx

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

// ✅ 로그인 정보 유틸
import { getLoginData, clearLoginData, LoginData } from '../../utils/token';

const Header: React.FC = () => {
  const navigate = useNavigate();

  // 로그인 정보 상태
  const [loginData, setLoginDataState] = useState<LoginData | null>(null);

  // 처음 렌더링 될 때 localStorage에서 로그인 정보 읽기
  useEffect(() => {
    const data = getLoginData(); // localStorage → 메모리
    setLoginDataState(data);
  }, []);
  

  // 로그아웃 버튼 클릭
  const handleLogout = () => {
    if (!window.confirm('로그아웃 하시겠습니까?')) return;

    clearLoginData();       // localStorage 비우기
    setLoginDataState(null); // 헤더 상태 갱신
    navigate('/');          // 홈으로 이동 (원하면 /auth 등으로 변경 가능)
  };

  // 로그인 / 회원가입 버튼 클릭
  const handleGoAuth = () => {
    navigate('/auth');
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* 왼쪽 로고 */}
        <div className="header-logo">
          <Link to="/">직관 GOAL</Link>
        </div>

        {/* 가운데 메뉴 */}
        <nav className="header-nav">
          <Link to="/ticket">티켓팅 하기</Link>
          <Link to="/reviews">이용 후기</Link>
          <Link to="/notices">공지사항</Link>
          <Link to="/mypage">마이페이지</Link>
        </nav>

        {/* 오른쪽 로그인 영역 */}
        <div className="header-right">
          {loginData ? (
            // ✅ 로그인 된 상태
            <>
              <span className="header-user">
                {loginData.nickname} 님
              </span>
              <button
                className="header-btn header-logout-btn"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          ) : (
            // ✅ 로그아웃 상태
            <button
              className="header-btn header-login-btn"
              onClick={handleGoAuth}
            >
              로그인 / 회원가입
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;