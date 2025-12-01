// /src/utils/token.ts

// 🔑 localStorage에 한 번에 저장할 key
const LOGIN_KEY = 'login_data';

// 로그인 정보 타입
export type LoginData = {
  token: string;     // accessToken
  id: number;        // 사용자 ID
  nickname: string;  // 닉네임
  provider: string;  // local / kakao / naver
};

// ✅ 로그인 정보 저장
export const setLoginData = (data: LoginData) => {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
  // 로그인 상태 변경 이벤트 발생 (헤더에서 감지)
  window.dispatchEvent(new Event('loginChange'));
};

// ✅ 로그인 정보 조회
export const getLoginData = (): LoginData | null => {
  const raw = localStorage.getItem(LOGIN_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as LoginData;
  } catch (err) {
    console.error('[getLoginData] JSON 파싱 오류', err);
    return null;
  }
};

// ✅ 로그인 정보 삭제 (로그아웃)
export const clearLoginData = () => {
  localStorage.removeItem(LOGIN_KEY);
  window.dispatchEvent(new Event('loginChange'));
};