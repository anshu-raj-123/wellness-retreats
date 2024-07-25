import React from 'react';
import './RetreatCard.css';

const RetreatCard = ({ retreat }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="retreat-card">
      <img src={retreat.image} alt={retreat.title} className="retreat-image" />
      <div className="retreat-info">
        <h3 className="retreat-title">{retreat.title}</h3>
        <p className="retreat-description">{retreat.description}</p>
        <p>Date: {formatDate(retreat.date)}</p> 
        <p>Location: {retreat.location}</p>
        <p>Price: ${retreat.price}</p>
      </div>
    </div>
  );
};

export default RetreatCard;
