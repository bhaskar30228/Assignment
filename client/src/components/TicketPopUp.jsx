import './TicketPopUp.css';

const TicketPopUp = ({ ticket = {}, onClose }) => {
  const {
    id = '1234',
    date = '',
    name = '',
    dept = '',
    subject = '',
    description = '',
    category = '',
    type = '',
    priority = '',
    status = '',
    attachment = ''
  } = ticket;

  return (
    <div className="ticket-popup-overlay" onClick={onClose}>
      <div className="ticket-popup" onClick={e => e.stopPropagation()}>
        <h3 className="ticket-popup-title">Ticket Details</h3>
        
        <div className="ticket-info">
          <div className="ticket-info-row">
            <span className="ticket-label">Ticket No:</span>
            <span className="ticket-value">{id}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Date:</span>
            <span className="ticket-value">{date}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Name:</span>
            <span className="ticket-value">{name}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Dept:</span>
            <span className="ticket-value">{dept}</span>
          </div>
        </div>

        <div className="ticket-details">
          <div className="ticket-info-row">
            <span className="ticket-label">Title:</span>
            <span className="ticket-value">{subject}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Description:</span>
            <span className="ticket-value">{description}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Category:</span>
            <span className="ticket-value">{category}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Type:</span>
            <span className="ticket-value">{type}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Priority:</span>
            <span className="ticket-value">{priority}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Status:</span>
            <span className="ticket-value">{status}</span>
          </div>
          <div className="ticket-info-row">
            <span className="ticket-label">Attachment:</span>
            <span className="ticket-value">{attachment || 'None'}</span>
          </div>
        </div>

        <div className="ticket-popup-footer">
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default TicketPopUp;