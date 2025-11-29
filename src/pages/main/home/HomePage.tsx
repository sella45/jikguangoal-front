import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">직관 GOAL</h1>
      <p className="home-subtitle">국내 스포츠 대리 티켓팅 플랫폼</p>

      <section className="home-section">
        <h2>서비스 소개</h2>
        <p>KBO, K리그, 농구, 배구 등 국내 스포츠 티켓팅을 대신 시도합니다.</p>
      </section>

      <section className="home-section">
        <h2>이용 방법</h2>
        <ol>
          <li>경기 선택</li>
          <li>좌석/인원 선택 후 결제</li>
          <li>티켓팅 결과 확인</li>
        </ol>
      </section>
    </div>
  );
};

export default HomePage;