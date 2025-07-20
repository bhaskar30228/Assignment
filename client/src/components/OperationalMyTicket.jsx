import React from 'react';
import './OperationalMyTicket.css';

const OperationalMyTicket = () => {
  return (
    <div className="ticket-container">
      <h1>My Ticket</h1>
      
      <div className="ticket-controls">
        <div className="show-entries">
          <span>Show:</span>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span>Entries</span>
        </div>
      </div>

      <div className="ticket-table-container">
        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No.</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Status</th>
              <th>Person in Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>Login issue</td>
              <td>Access</td>
              <td><span className="priority-high">High</span></td>
              <td>13/08/21</td>
              <td><span className="status-progress">Progress</span></td>
              <td></td>
              <td className="action-icons">☐✔✔✔</td>
            </tr>
            <tr>
              <td>1124</td>
              <td>New ticket issue</td>
              <td>Access</td>
              <td><span className="priority-medium">Medium</span></td>
              <td>14/08/21</td>
              <td><span className="status-onhold">On hold</span></td>
              <td></td>
              <td className="action-icons">☐✔✔✔</td>
            </tr>
            <tr>
              <td>1224</td>
              <td>New request submission</td>
              <td>Feedback</td>
              <td><span className="priority-low">Low</span></td>
              <td>13/08/21</td>
              <td><span className="status-close">Close to</span></td>
              <td></td>
              <td className="action-icons">☐✔✔✔</td>
            </tr>
            <tr>
              <td>1244</td>
              <td>Ticketing submission</td>
              <td>Ticketing issue</td>
              <td><span className="priority-high">High</span></td>
              <td>14/08/21</td>
              <td><span className="status-progress">Progress</span></td>
              <td></td>
              <td className="action-icons">☐✔✔✔</td>
            </tr>
            <tr>
              <td>1114</td>
              <td>Login issue</td>
              <td>Access</td>
              <td><span className="priority-high">High</span></td>
              <td>3/08/21</td>
              <td><span className="status-progress">Progress</span></td>
              <td></td>
              <td className="action-icons">☐✔✔✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        Showing 1 to 5 of 5 entries
      </div>
    </div>
  );
};

export default OperationalMyTicket;