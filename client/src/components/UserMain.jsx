import React from 'react';
import './UserMain.css';

const UserMain = () => {
  return (
    <div className="main">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="tickets-container">
        {/* Total Tickets Card */}
        <div className="ticket-card" style={{ backgroundColor: '#05386B' }}>
          <h3>Total Tickets</h3>
          <div className="ticket-count">12</div>
        </div>
        
        {/* Total Solved Card */}
        <div className="ticket-card" style={{ backgroundColor: '#0BFF68' }}>
          <h3>Total Solved</h3>
          <div className="ticket-count">8</div>
        </div>
        
        {/* Awaiting Approval Card */}
        <div className="ticket-card" style={{ backgroundColor: '#FE594E' }}>
          <h3>Awaiting Approval</h3>
          <div className="ticket-count">2</div>
        </div>
        
        {/* In Progress Card */}
        <div className="ticket-card" style={{ backgroundColor: '#FCFF6C' }}>
          <h3>In Progress</h3>
          <div className="ticket-count">2</div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;