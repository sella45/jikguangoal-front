import React from 'react';
import { startNaverLogin } from '../../../api/auth'; // 네이버 로그인 시작 함수

const NaverButton: React.FC = () => {

  const handleClick = () => {
    // 네이버 로그인 시작
    startNaverLogin();
  };

  return (
    <button onClick={handleClick} className="naver-login-btn">
      네이버로 로그인
    </button>
  );
};

export default NaverButton;