// /src/pages/auth/Social/KakaoCallback.tsx

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLoginData } from '../../../utils/token';

const KakaoCallback: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const token = params.get('token');
    const idStr = params.get('id');
    const nickname =
      params.get('nickname') || '카카오사용자';
    const provider =
      params.get('provider') || 'kakao';

    if (token && idStr) {
      // ✅ 로컬스토리지에 로그인 정보 저장
      setLoginData({
        token,
        id: Number(idStr),
        nickname,
        provider,
      });

      alert('카카오 로그인에 성공했습니다.');
      navigate('/'); // 홈으로 이동
    } else {
      alert('카카오 로그인에 실패했습니다.');
      navigate('/auth');
    }
  }, [location.search, navigate]);

  return <div>카카오 로그인 처리 중...</div>;
};

export default KakaoCallback;