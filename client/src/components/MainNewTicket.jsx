import { useState } from 'react';
import './MainNewTicket.css';
import vector from '../assets/Vector.png';
const MainNewTicket = () => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    name: '',
    subject: '',
    date: '',
    department: '',
    category: '',
    description: '',
    type: '',
    priority: '',
    notRobot: false,
    privacyTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ticket-form-container">
      <div className="ticket-form">
        <h1 className="form-title">Create New Ticket</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Ticket No.</label>
              <input type="text" name="ticketNo" value={formData.ticketNo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <select name="department" value={formData.department} onChange={handleChange}>
                <option value="">Select Department</option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Subject:</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category:</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
                <option value="Network">Network</option>
              </select>
            </div>

            <div className="form-group" style={{ flex: 2 }}>
              <label>Description:</label>
              <div className="textarea-wrapper">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <img src={vector} className="upload-icon"/>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Type:</label>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Incident">Incident</option>
                <option value="Request">Request</option>
                <option value="Problem">Problem</option>
              </select>
            </div>
            <div className="form-group">
              <label>Priority:</label>
              <select name="priority" value={formData.priority} onChange={handleChange}>
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div className="recaptcha-box">
            <input
              type="checkbox"
              id="robot-check"
              name="notRobot"
              checked={formData.notRobot}
              onChange={handleChange}
            />
            <label htmlFor="robot-check">I'm not a robot</label>
            <div className="recaptcha-logo">
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
              <div className="recaptcha-privacy">
                <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a> - <a href="https://www.google.com/intl/en/policies/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MainNewTicket;
