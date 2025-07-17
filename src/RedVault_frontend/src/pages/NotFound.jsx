import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="not-found-container">
      
      
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Oops! This blood bag is empty.</h1>
        <p className="error-subtitle">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="blood-drop-animation">
          <div className="blood-drop"></div>
        </div>
        
        <div className="empty-message">
          <h3>What happened?</h3>
          <p>
            It looks like this page has been donated to someone else! 
            Don't worry, there are plenty of other pages that need your attention.
          </p>
        </div>
        
        <Link to="/" className="home-btn">
          Return to Home
        </Link>
        
        <div className="suggestions">
          <div className="suggestion-card">
            <span className="suggestion-icon">🩸</span>
            <div className="suggestion-title">Donate Blood</div>
            <div className="suggestion-desc">Find donation centers</div>
          </div>
          <div className="suggestion-card">
            <span className="suggestion-icon">🏥</span>
            <div className="suggestion-title">Hospital Portal</div>
            <div className="suggestion-desc">Request blood units</div>
          </div>
          <div className="suggestion-card">
            <span className="suggestion-icon">📊</span>
            <div className="suggestion-title">Admin Panel</div>
            <div className="suggestion-desc">System management</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default NotFound;