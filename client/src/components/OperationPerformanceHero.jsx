import React from 'react';
import './OperationPerformanceHero.css';

const OperationPerformanceHero = () => {
  return (
    <div className="performance-container">
      <h2 className="title">Performance</h2>
      <div className="main-content">
        <div className="left-panel">
          <div className="profile-section">
            <div className="profile-img" />
            <div className="profile-info">
              <h3>Operation Name</h3>
              <div className="contact-info">
                <p>Contact No: 0123456789</p>
                <p>Department: ABC</p>
              </div>
            </div>
          </div>

          <div className="ticket-stats">
            <h3>Total Ticket Handle <span>5</span></h3>
            <p>Ticket Solved <span>2</span></p>
            <p>Ticket Pending <span>1</span></p>
            <p>Ticket in progress <span>2</span></p>
            <p className="rating">
              Rating 
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </p>
          </div>
        </div>

        <div className="right-panel">
          {[1, 2, 3].map((num) => (
            <div key={num} className="operator-card">
              <div className="mini-profile-img" />
              <div className="operator-details">
                <p>Operation Name {num}</p>
                <button>View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationPerformanceHero;
