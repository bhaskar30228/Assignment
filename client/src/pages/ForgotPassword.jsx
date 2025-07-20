import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [ setSubmitted] = useState(false);
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login")
    setSubmitted(true);
    navigate("/signUp")
  };

  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-box">
        
          <>
            <p className="instruction-text">
              Don't worry. Enter your email below and we will send you a link to change password.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className="forgotpassword-button">Submit</button>
            </form>
             <button className="signin-button" > 
            <Link to="/signin" className="back-to-signin">Sign In</Link>
            </button>
          </>
      </div>
    </div>
  );
};

export default ForgotPassword;