import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLoginData } from '../../../utils/token'; 

const NaverCallback: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드가 리다이렉트한 URL 예:
    // http://localhost:3000/auth/naver/callback?token=...&id=...&nickname=...&provider=naver
    const searchParams = new URLSearchParams(location.search);

    const token = searchParams.get('token');
    const id = searchParams.get('id');
    const nickname = searchParams.get('nickname');
    const provider = searchParams.get('provider');

    if (!token || !id || !nickname || !provider) {
      alert('네이버 로그인 정보가 올바르지 않습니다.');
      navigate('/auth');
      return;
    }

    // 로그인 정보 로컬스토리지에 저장
    setLoginData({
      token: token,
      id: Number(id), // 반드시 id로 저장 (Id 아님)
      nickname,
      provider,
    });

    alert('네이버 로그인에 성공했습니다!');
    navigate('/'); // 홈으로 이동
  }, [location.search, navigate]);

  return <div>네이버 로그인 처리 중입니다...</div>;
};

export default NaverCallback;