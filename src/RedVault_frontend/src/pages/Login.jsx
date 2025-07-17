import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || !formData.role) {
      setError('Please fill in all fields');
      return;
    }

    // Mock authentication - in real app, this would call an API
    const mockCredentials = {
      'donor@example.com': { password: 'password', role: 'donor' },
      'hospital@example.com': { password: 'password', role: 'hospital' },
      'admin@example.com': { password: 'password', role: 'admin' }
    };

    const user = mockCredentials[formData.email];
    if (user && user.password === formData.password && user.role === formData.role) {
      // Successful login
      switch(formData.role) {
        case 'donor':
          navigate('/donor');
          break;
        case 'hospital':
          navigate('/hospital');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    } else {
      setError('Invalid credentials or role mismatch');
    }
  };

  return (
    <div className="login-container">
      
      
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">🩸</div>
          <h2>Login to RedVault</h2>
          <p>Access your dashboard securely</p>
        </div>
              
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Select Role</label>
            <select 
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select your role</option>
              <option value="donor">Donor</option>
              <option value="hospital">Hospital</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>

        <div className="demo-credentials">
          <strong>Demo Credentials:</strong><br />
          Donor: donor@example.com / password<br />
          Hospital: hospital@example.com / password<br />
          Admin: admin@example.com / password
        </div>
      </div>

      
    </div>
  );
};

export default Login;