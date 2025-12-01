// /src/pages/auth/Social/KakaoButton.tsx

import React from 'react';
import { startKakaoLogin } from '../../../api/auth';

const KakaoButton: React.FC = () => {
  const handleClick = () => {
    startKakaoLogin(); // 카카오 로그인 시작
  };

  return (
    <button onClick={handleClick} className="kakao-login-btn">
      카카오로 로그인
    </button>
  );
};

export default KakaoButton;