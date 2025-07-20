import React from 'react';
import './TicketApproval.css';

const TicketApproval = () => {
  const tickets = [
    { id: 1234, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21' },
    { id: 1124, subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21' },
    { id: 1224, subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21' },
    { id: 1244, subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21' },
    { id: 1114, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '03/08/21' }
  ];

  return (
    <div className="ticket-approval-container">
      <h1 className="page-title">Ticket Approval</h1>
      
      <div className="find-ticket-section">
        <h2 className="section-title">Find ticket</h2>
        
        <div className="entries-control">
          <span>Show:</span>
          <select className="entries-select">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>Entries</span>
        </div>
        
        <div className="table-container">
          <table className="tickets-table">
            <thead>
              <tr>
                <th>Ticket No.</th>
                <th>Subject</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Date</th>
                <th>Action</th>
                <th>Assign to</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.category}</td>
                  <td>
                    <span className={`priority-badge ${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>{ticket.date}</td>
                  <td><span className="action-icon">✔</span></td>
                  <td><span className="assign-icon">✔</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="entries-info">
          Showing 1 to {tickets.length} of {tickets.length} entries
        </div>
      </div>
    </div>
  );
};

export default TicketApproval;