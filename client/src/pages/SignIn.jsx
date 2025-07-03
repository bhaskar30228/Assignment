import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const SignIn = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    const data = {
      email: formData.email,
      password: formData.password
    };

    try {
      const res = await axios.post(`http://localhost:5000/auth/signIn`, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing in user:", error.response?.data || error);
      alert("Error signing in user. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Helpdesk System</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className="auth-links">
          <Link to="/forgotPassword" className="forgot-password">Forgot Password?</Link>
          <Link to="/signup" className="sign-up-link">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
