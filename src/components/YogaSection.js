import React from 'react';
import './YogaSection.css';

const YogaSection = () => {
  return (
    <div className="yoga-section">
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yoga"
        className="yoga-image"
      />
      <div className="yoga-text">
        <h2 className="yoga-title">Discover Your Inner Peace</h2>
        <p className="yoga-description">
          Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.
        </p>
      </div>
    </div>
  );
};

export default YogaSection;
