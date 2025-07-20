import React from 'react';
import './OperationTeamDashboard.css';

const OperationTeamDashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="metrics-container">
        <div className="metric-box">
          <h2 className="metric-title">Total Tickets</h2>
          <p className="metric-value">12</p>
        </div>
        
        <div className="metric-box">
          <h2 className="metric-title">Total Solved</h2>
          <p className="metric-value">8</p>
        </div>
        
        <div className="metric-box">
          <h2 className="metric-title">Total Awaiting Approval</h2>
          <p className="metric-value">4</p>
        </div>
      </div>
      
      <div className="feedback-container">
        <h2 className="feedback-title">Customer Feedback</h2>
        <div className="stars">★★★★★☆</div>
      </div>
    </div>
  );
};

export default OperationTeamDashboard;