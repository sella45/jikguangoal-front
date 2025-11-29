# 🏟️ 직관 GOAL (Jikguan GOAL) – Frontend

국내 스포츠(KBO, K리그, 농구, 배구) **대리 티켓팅 플랫폼**의 프론트엔드입니다.  
사용자가 경기 정보를 확인하고, 좌석/인원 선택 후 결제를 진행하면  
플랫폼 운영자가 경기 2일 전까지 직접 티켓팅을 시도합니다.

성공 시 20% 수수료, 실패 시 전액 환불 구조입니다.

---

## 📌 1. 프로젝트 개요

직관 GOAL은 국내 스포츠 경기를 직접 티켓팅하기 어려운 사용자들을 위해  
**대리 티켓팅 서비스를 제공하는 플랫폼**입니다.

### 🔐 회원/비회원 권한

| 구분 | 가능한 기능 |
|------|-------------|
| **비회원** | 회사 소개, 후기 조회, 공지사항 조회, 경기 기본 정보 조회 |
| **회원** | 티켓팅 의뢰, 결제(Toss), 마이페이지 확인, 후기 작성 |

---

## ⚙️ 2. 기술 스택 (Frontend)

- React + TypeScript  
- React Router DOM  
- CSS Modules  
- Axios  
- Zustand (전역 상태 관리 예정)  
- Toss Payments API (결제)  
- OpenWeather API (날씨)

---

## 📂 3. 폴더 구조

```
src/
├── App.tsx
├── App.css
├── index.tsx
├── index.css
│
├── assets/
│   └── components/
│       ├── Header.tsx
│       └── Header.css
│
└── pages/
    ├── main/
    │   ├── home/
    │   │   ├── HomePage.tsx
    │   │   └── HomePage.css
    │   ├── ticket/
    │   │   ├── TicketPage.tsx
    │   │   └── TicketPage.css
    │   ├── reviews/
    │   │   ├── ReviewsPage.tsx
    │   │   └── ReviewsPage.css
    │   └── notices/
    │       ├── NoticesPage.tsx
    │       └── NoticesPage.css
    │
    ├── auth/
    │   ├── AuthPage.tsx
    │   └── AuthPage.css
    │
    ├── mypage/
    │   ├── MyPage.tsx
    │   └── MyPage.css
    │
    └── request/
        ├── RequestDetailPage.tsx
        └── RequestDetailPage.css
```

---

## 📄 4. 구현된 페이지 소개

### **1) 회사 소개 / 홈 (`/`)**
- 플랫폼 소개  
- 서비스 이용 방법  
- 수수료 안내  
- 전액 환불 정책  
- 오늘의 인기 경기 섹션 (기획 예정)

---

### **2) 티켓팅 하기 (`/ticket`)**
- 종목 선택 (KBO / K리그 / 농구 / 배구)  
- 경기 날짜/리그별 필터  
- 경기 상세 정보  
- **당일 날씨 안내 (OpenWeather API)**  
- 좌석 선택  
- 인원 선택  
- 가격 계산 (티켓가 + 20%)  
- Toss 결제 모달

---

### **3) 이용 후기 (`/reviews`)**
- 후기 조회는 비회원도 가능  
- 후기 작성은 회원 + 티켓팅 성공자만 가능  
- 별점 시스템 적용 예정

---

### **4) 공지사항 (`/notices`)**
- 비회원/회원 모두 조회 가능  
- 플랫폼 공지 제공  

---

### **5) 로그인/회원가입 (`/auth`)**
- 로그인/회원가입 탭 전환 UI  
- 로그인 성공 → 전역 상태 저장 → 헤더 반영

---

### **6) 마이페이지 (`/mypage`)**
- 내가 티켓팅 의뢰한 경기 목록  
- 상태별 확인 (진행 중 / 성공 / 실패)  
- 후기 작성 버튼 제공 (성공 시)

---

### **7) 티켓팅 상세 (`/requests/:requestId`)**
- 경기 정보  
- 결제 정보  
- 티켓팅 상태  
- 후기 작성 연결  

---

## 🧪 5. 실행 방법

### 1) 패키지 설치
```bash
npm install
```

### 2) 개발 서버 실행
```bash
npm start
```

### 3) 브라우저 접속
```
http://localhost:3000
```

---

## ✔ 6. 개발 진행 순서 (추천)

1. 페이지 라우팅 및 레이아웃 구축 ✔  
2. Header 공통 컴포넌트 제작 ✔  
3. 로그인 상태 전역관리 (Zustand)  
4. AuthPage UI  
5. 경기 선택 + 티켓팅 페이지 UI  
6. 결제 연동  
7. 후기 / 마이페이지 연동  

---

## 🚀 7. 다음 기능 예정

- 관리자 페이지 (공지·경기 관리)  
- 반응형 UI  
- 경기 검색 고도화  
- 프로필 이미지  
- 후기 좋아요  

---

## 📝 8. 라이선스

본 프로젝트는 포트폴리오 용도로 제작되었으며  
상업적 사용은 금지됩니다.

---

# 🎯 요약

> 직관 GOAL 프론트엔드는 React + TypeScript 기반의  
> 국내 스포츠 대리 티켓팅 플랫폼 UI이며,  
> 확장성과 유지보수성을 고려한 페이지 구조로 설계되었습니다.
