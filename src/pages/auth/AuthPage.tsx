// /src/pages/auth/AuthPage.tsx

import React, { useState } from 'react';
import './AuthPage.css';
import KakaoButton from './Social/KakaoButton';
import NaverButton from './Social/NaverButton';

// ✅ Auth 관련 API 모음
import {
  signupApi,
  sendEmailCodeApi,
  verifyEmailCodeApi,
  loginApi,
} from '../../api/auth';

// ✅ 로그인 정보 저장 유틸
import { setLoginData } from '../../utils/token';

const AuthPage: React.FC = () => {
  // 로그인 / 회원가입 탭 상태
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // 일반 로그인용 입력값
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // 일반 회원가입용 입력값
  const [signupNickname, setSignupNickname] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupEmailConfirm, setSignupEmailConfirm] = useState(''); // 이메일 확인
  const [signupPassword, setSignupPassword] = useState('');
  const [signupVerificationCode, setSignupVerificationCode] = useState(''); // 이메일 인증코드 입력값

  // 이메일 인증 완료 여부 (UI용)
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // 비밀번호 정규식: 영문 + 숫자 + 특수문자, 최소 8자
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,}$/;

  // ✅ 일반 로그인 (백엔드 연동)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('[일반 로그인 요청]', {
        email: loginEmail,
        password: loginPassword,
      });

      const res = await loginApi({
        email: loginEmail,
        password: loginPassword,
      });

      console.log('[로그인 성공]', res.data);

      // 응답: { id, email, nickname, provider, accessToken }
      setLoginData({
        token: res.data.accessToken,
        id: res.data.id,
        nickname: res.data.nickname,
        provider: res.data.provider,
      });

      alert('로그인에 성공했습니다.');
      window.location.href = '/'; // 홈으로 이동 (헤더 새로 렌더)
    } catch (error: any) {
      console.error('[로그인 실패]', error);
      const msg =
        error.response?.data || '로그인 중 오류가 발생했습니다.';
      alert(msg);
    }
  };

  // ✅ 일반 회원가입 + /api/auth/signup 호출
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ 이메일 일치 여부 확인
    if (signupEmail !== signupEmailConfirm) {
      alert('이메일과 이메일 확인이 일치하지 않습니다.');
      return;
    }

    // 2️⃣ 비밀번호 유효성 검사
    if (!passwordRegex.test(signupPassword)) {
      alert(
        '비밀번호는 영문, 숫자, 특수문자를 포함해 최소 8자 이상이어야 합니다.'
      );
      return;
    }

    // 3️⃣ 이메일 인증 여부(나중에 강제 가능)
    if (!isEmailVerified) {
      const ok = window.confirm(
        '이메일 인증이 완료되지 않았습니다.\n그래도 계속 진행할까요?'
      );
      if (!ok) return;
    }

    console.log('[일반 회원가입 요청]', {
      nickname: signupNickname,
      email: signupEmail,
      password: signupPassword,
    });

    try {
      const res = await signupApi({
        nickname: signupNickname,
        email: signupEmail,
        password: signupPassword,
      });

      console.log('[회원가입 성공]', res.data);
      alert('회원가입이 완료되었습니다. 이제 로그인 해주세요.');

      // 입력값 초기화
      setSignupNickname('');
      setSignupEmail('');
      setSignupEmailConfirm('');
      setSignupPassword('');
      setSignupVerificationCode('');
      setIsEmailVerified(false);

      // 로그인 탭으로 전환
      setMode('login');
    } catch (error: any) {
      console.error('[회원가입 실패]', error);
      const msg =
        error.response?.data || '회원가입 중 오류가 발생했습니다.';
      alert(msg);
    }
  };

  // ✅ 이메일 인증코드 보내기 (/api/auth/email/send-code)
  const handleSendVerificationCode = async () => {
    if (!signupEmail) {
      alert('이메일을 먼저 입력해주세요.');
      return;
    }

    try {
      console.log('[이메일 인증코드 발송 요청]', signupEmail);
      await sendEmailCodeApi(signupEmail);
      alert('인증코드가 이메일로 발송되었습니다. 메일함을 확인해주세요.');
    } catch (error: any) {
      console.error('[인증코드 발송 실패]', error);
      const msg =
        error.response?.data || '인증코드 발송 중 오류가 발생했습니다.';
      alert(msg);
    }
  };

  // ✅ 이메일 인증코드 확인 (/api/auth/email/verify-code)
  const handleCheckVerificationCode = async () => {
    if (!signupVerificationCode) {
      alert('인증코드를 입력해주세요.');
      return;
    }

    try {
      console.log('[이메일 인증코드 확인 요청]', {
        email: signupEmail,
        code: signupVerificationCode,
      });

      await verifyEmailCodeApi(signupEmail, signupVerificationCode);

      alert('이메일 인증이 완료되었습니다.');
      setIsEmailVerified(true);
    } catch (error: any) {
      console.error('[인증코드 확인 실패]', error);
      const msg =
        error.response?.data || '인증코드 확인 중 오류가 발생했습니다.';
      alert(msg);
      setIsEmailVerified(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* 상단 탭: 로그인 / 회원가입 */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            로그인
          </button>
          <button
            className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            회원가입
          </button>
        </div>

        {/* 왼쪽: 일반 로그인 / 회원가입 폼 */}
        <div className="auth-body">
          <div className="auth-form-area">
            {mode === 'login' ? (
              // ✅ 로그인 폼
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                <h2 className="auth-title">로그인</h2>

                <label className="auth-label">
                  이메일
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                  />
                </label>

                <label className="auth-label">
                  비밀번호
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                </label>

                <button type="submit" className="auth-submit-btn">
                  로그인
                </button>
              </form>
            ) : (
              // ✅ 회원가입 폼
              <form className="auth-form" onSubmit={handleSignupSubmit}>
                <h2 className="auth-title">이메일로 회원가입</h2>

                <label className="auth-label">
                  닉네임
                  <input
                    type="text"
                    value={signupNickname}
                    onChange={(e) => setSignupNickname(e.target.value)}
                    placeholder="닉네임을 입력하세요"
                    required
                  />
                </label>

                <label className="auth-label">
                  이메일
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                  />
                </label>

                <label className="auth-label">
                  이메일 확인
                  <input
                    type="email"
                    value={signupEmailConfirm}
                    onChange={(e) =>
                      setSignupEmailConfirm(e.target.value)
                    }
                    placeholder="이메일을 다시 입력하세요"
                    required
                  />
                </label>

                {/* 이메일 인증코드 발송 버튼 */}
                <div className="auth-inline-row">
                  <button
                    type="button"
                    className="auth-small-btn"
                    onClick={handleSendVerificationCode}
                  >
                    인증코드 보내기
                  </button>
                </div>

                {/* 이메일 인증코드 입력 + 확인 버튼 */}
                <label className="auth-label">
                  이메일 인증코드
                  <div className="auth-inline-row">
                    <input
                      type="text"
                      value={signupVerificationCode}
                      onChange={(e) =>
                        setSignupVerificationCode(e.target.value)
                      }
                      placeholder="메일로 받은 인증코드를 입력하세요"
                    />
                    <button
                      type="button"
                      className="auth-small-btn"
                      onClick={handleCheckVerificationCode}
                    >
                      인증 확인
                    </button>
                  </div>
                  {isEmailVerified && (
                    <small className="email-verified-text">
                      ✅ 이메일 인증 완료
                    </small>
                  )}
                </label>

                <label className="auth-label">
                  비밀번호
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) =>
                      setSignupPassword(e.target.value)
                    }
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                  {/* 비밀번호 규칙 안내 문구 */}
                  <small className="password-rule">
                    ※ 영문 + 숫자 + 특수문자 포함 8자 이상
                  </small>
                </label>

                <button type="submit" className="auth-submit-btn">
                  회원가입
                </button>
              </form>
            )}
          </div>

          {/* 오른쪽: 소셜 로그인 영역 */}
          <div className="auth-social-area">
            <h3 className="auth-social-title">간편 로그인</h3>
            <p className="auth-social-desc">
              카카오 / 네이버 계정으로 빠르게 로그인
            </p>

            {/* 1) 카카오 로그인 버튼 */}
            <KakaoButton />
            {/* 2) 네이버 로그인 버튼 */}
            <NaverButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;