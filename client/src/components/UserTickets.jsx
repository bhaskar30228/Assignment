import React, { useState } from 'react';
import TicketPopUp from './TicketPopUp';
import './UserTickets.css';

const UserTickets = () => {
  const [entriesToShow, setEntriesToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample ticket data with all required fields
  const tickets = [
  { 
    id: 1234, 
    subject: 'Login issue', 
    status: 'Progress', 
    supportBy: 'Tech support', 
    date: '13/08/21', 
    rate: 5,
    name: 'John Doe',
    dept: 'IT',
    description: 'Unable to login to the system',
    category: 'Authentication',
    type: 'Technical',
    priority: 'High',
    attachment: 'error_log.txt'
  },
  {
    id: 1235,
    subject: 'Password Reset',
    status: 'Resolved',
    supportBy: 'Help Desk',
    date: '14/08/21',
    rate: 4,
    name: 'Jane Smith',
    dept: 'HR',
    description: 'Need assistance resetting password',
    category: 'Account',
    type: 'Support',
    priority: 'Medium',
    attachment: 'none'
  },
  {
    id: 1236,
    subject: 'Email not syncing',
    status: 'Open',
    supportBy: 'IT Team',
    date: '15/08/21',
    rate: 3,
    name: 'Alice Brown',
    dept: 'Finance',
    description: 'My emails are not syncing on mobile',
    category: 'Communication',
    type: 'Technical',
    priority: 'Low',
    attachment: 'screenshot.png'
  },
  {
    id: 1237,
    subject: 'App crash on launch',
    status: 'Progress',
    supportBy: 'Dev Team',
    date: '16/08/21',
    rate: 2,
    name: 'Bob Martin',
    dept: 'Engineering',
    description: 'App crashes immediately after launch',
    category: 'Bug',
    type: 'Technical',
    priority: 'High',
    attachment: 'crash_report.zip'
  },
  {
    id: 1238,
    subject: 'VPN not connecting',
    status: 'Resolved',
    supportBy: 'Network Admin',
    date: '17/08/21',
    rate: 5,
    name: 'Charlie Davis',
    dept: 'Operations',
    description: 'Unable to connect to VPN from home',
    category: 'Network',
    type: 'Technical',
    priority: 'High',
    attachment: 'vpn_logs.txt'
  },
  {
    id: 1239,
    subject: 'Leave application issue',
    status: 'Open',
    supportBy: 'HR Support',
    date: '18/08/21',
    rate: 1,
    name: 'Diana Prince',
    dept: 'HR',
    description: 'Unable to apply for leave via portal',
    category: 'Portal',
    type: 'Support',
    priority: 'Medium',
    attachment: 'none'
  },
  {
    id: 1240,
    subject: 'Slow system performance',
    status: 'Progress',
    supportBy: 'IT Desk',
    date: '19/08/21',
    rate: 3,
    name: 'Edward King',
    dept: 'Admin',
    description: 'System running very slowly since update',
    category: 'Performance',
    type: 'Technical',
    priority: 'Medium',
    attachment: 'perf_report.docx'
  },
  {
    id: 1241,
    subject: 'Access denied to shared folder',
    status: 'Resolved',
    supportBy: 'System Admin',
    date: '20/08/21',
    rate: 4,
    name: 'Fiona Green',
    dept: 'Logistics',
    description: 'No permission to access team folder',
    category: 'Permissions',
    type: 'Support',
    priority: 'Low',
    attachment: 'none'
  }
];


  const filteredTickets = tickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toString().includes(searchTerm)
  );

  const handleEntriesChange = (e) => {
    setEntriesToShow(Number(e.target.value));
  };

  const renderStars = (count) => {
    return '★'.repeat(count);
  };

  return (
    <div className="user-tickets-container">
      <h1 className="tickets-title">List of Ticket</h1>
      
      <div className="tickets-controls">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Find ticket" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="entries-selector">
          <span>Show:</span>
          <select value={entriesToShow} onChange={handleEntriesChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>Entries</span>
        </div>
      </div>
      
      <div className="tickets-table-container">
        <table className="tickets-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support by</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(ticket => (
              <tr key={ticket.id} onClick={() => setSelectedTicket(ticket)}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-badge ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.supportBy}</td>
                <td>{ticket.date}</td>
                <td className="rating">{renderStars(ticket.rate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="tickets-footer">
        <div className="entries-info">
          Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries
        </div>
      </div>

      {selectedTicket && (
        <TicketPopUp 
          ticket={selectedTicket} 
          onClose={() => setSelectedTicket(null)} 
        />
      )}
    </div>
  );
};

export default UserTickets;