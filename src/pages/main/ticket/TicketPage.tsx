import React from 'react';
import './TicketPage.css';

const TicketPage: React.FC = () => {
  return (
    <div className="ticket-container">
      <h1 className="ticket-title">티켓팅 하기</h1>

      <section className="ticket-section">
        <h2>1. 경기 선택</h2>
        <p>종목/날짜/경기 선택 기능이 여기에 들어갑니다.</p>
      </section>

      <section className="ticket-section">
        <h2>2. 경기 정보 & 날씨</h2>
        <p>경기 팀, 장소, 시간, 날씨 정보 표시.</p>
      </section>

      <section className="ticket-section">
        <h2>3. 좌석/인원 선택</h2>
        <p>좌석 구역, 인원 선택, 가격 계산 표시.</p>
      </section>

      <section className="ticket-section">
        <h2>4. 결제</h2>
        <p>Toss 간편 결제 창을 모달로 띄움.</p>
      </section>
    </div>
  );
};

export default TicketPage;