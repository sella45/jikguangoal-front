import React from 'react';
import './RequestDetailPage.css';

const RequestDetailPage: React.FC = () => {
  return (
    <div className="request-detail-container">
      <h1 className="request-detail-title">티켓팅 의뢰 상세</h1>
      <p>특정 티켓팅 요청의 상태/결제 정보/후기 작성 여부 표시</p>
    </div>
  );
};

export default RequestDetailPage;