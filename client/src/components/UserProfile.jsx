import  { useContext, useState } from 'react';
import './UserProfile.css';
import { FaUserAlt, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const handleRatingClick = (index) => {
    setRating(index);
  };
    const editProfile = () => {
        navigate('/editProfile');
    }
  return (
    <div>
      <h2>User Profile</h2>
    <div className="main-container">
      <div className="containers">
        
    <div className="profile-container">
      <div className="profile-card">
        <div className="user-info-card">
          <div className="edit-icon">
            <FaPen onClick={editProfile} />
          </div>
          <div className="user-avatar">
            <FaUserAlt size={60} />
          </div>
          <div className="user-details">
            <p><strong>Username:</strong> John Doe</p>
            <p><strong>Contact:</strong> +91-1234567890</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Department:</strong> IT</p>
          </div>
        </div>

        <div className="feedback-card">
          <h4>Give Your Feedback</h4>
          <textarea
            placeholder="[Lorem Ipsum]"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            />
          <div className="stars">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
              key={index}
              className={index <= rating ? 'filled' : ''}
              onClick={() => handleRatingClick(index)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="submit-btn">Submit Feedback</button>
        </div>
      </div>
    </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
