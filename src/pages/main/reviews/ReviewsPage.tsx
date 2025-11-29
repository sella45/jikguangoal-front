import React from 'react';
import './ReviewsPage.css';

const ReviewsPage: React.FC = () => {
  return (
    <div className="reviews-container">
      <h1 className="reviews-title">이용 후기</h1>
      <p>티켓팅 성공자 & 의뢰자의 별점 기반 후기 목록.</p>
    </div>
  );
};

export default ReviewsPage;