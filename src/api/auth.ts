// /src/api/auth.ts

import axios from 'axios';

// ✅ 백엔드 기본 주소 (포트 9090)
const BACKEND_BASE_URL = 'http://localhost:9090';

// ✅ 공통 axios 인스턴스
const api = axios.create({
  baseURL: BACKEND_BASE_URL,
});

// ✅ 일반 회원가입 API
// POST http://localhost:9090/api/auth/signup
export const signupApi = (params: {
  nickname: string;
  email: string;
  password: string;
}) => {
  return api.post('/api/auth/signup', params);
};

// ✅ 일반 로그인 API
// POST http://localhost:9090/api/auth/login
export const loginApi = (params: {
  email: string;
  password: string;
}) => {
  return api.post('/api/auth/login', params);
};

// ✅ 이메일 인증코드 발송 API
// POST http://localhost:9090/api/auth/email/send-code
export const sendEmailCodeApi = (email: string) => {
  return api.post('/api/auth/email/send-code', { email });
};

// ✅ 이메일 인증코드 확인 API
// POST http://localhost:9090/api/auth/email/verify-code
export const verifyEmailCodeApi = (email: string, code: string) => {
  return api.post('/api/auth/email/verify-code', { email, code });
};

// ✅ 카카오 로그인 시작
export const startKakaoLogin = () => {
  window.location.href = `${BACKEND_BASE_URL}/api/auth/kakao/login`;
};

// ✅ 네이버 로그인 시작
export const startNaverLogin = () => {
  window.location.href = `${BACKEND_BASE_URL}/api/auth/naver/login`;
};