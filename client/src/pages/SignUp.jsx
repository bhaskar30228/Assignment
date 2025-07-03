import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const SignUp = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Confirm password check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    try {
      const res = await axios.post(`http://localhost:5000/auth/signUp`, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up user:", error.response?.data || error);
      alert("Error signing up user. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Helpdesk System</h1>
        <p className="para">Sign up here</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <div className="auth-links">
          <Link to="/forgotPassword" className="forgot-password">Forgot Password?</Link>
          <Link to="/signin" className="sign-in-link">Already have an account? Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
