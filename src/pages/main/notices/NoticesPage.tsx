import React from 'react';
import './NoticesPage.css';

const NoticesPage: React.FC = () => {
  return (
    <div className="notices-container">
      <h1 className="notices-title">공지사항</h1>
      <p>서비스 점검/공지/정책 변경 등 공지 리스트.</p>
    </div>
  );
};

export default NoticesPage;