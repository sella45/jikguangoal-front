import React from 'react';
import './AuthPage.css';

const AuthPage: React.FC = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-title">로그인 / 회원가입</h1>
      <p>로그인한 후 티켓팅 의뢰 가능합니다.</p>
    </div>
  );
};

export default AuthPage;