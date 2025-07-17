import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>RedVault</h1>
            <p>Protecting Every Drop with AI-Powered Blood Bank Management</p>
            <div className="hero-actions">
              <Link to="/login" className="btn btn-primary">Donor Login</Link>
              <Link to="/login" className="btn btn-secondary">Hospital Login</Link>
              <Link to="/login" className="btn btn-primary">Admin Panel</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose RedVault?</h2>
          <p className="features-subtitle">
            Experience the future of blood bank management with cutting-edge technology
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Predictions</h3>
              <p>Advanced machine learning algorithms predict blood demand patterns and optimize inventory management in real-time.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Real-Time Tracking</h3>
              <p>Track blood units from donation to transfusion with blockchain-powered transparency and complete audit trails.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Fraud Prevention</h3>
              <p>Multi-layered security systems detect and prevent fraudulent activities, ensuring blood safety and integrity.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Decentralized Health</h3>
              <p>Blockchain technology ensures data immutability and creates a trustless ecosystem for blood bank operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">10,000+</div>
              <div className="stat-label">Active Donors</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Partner Hospitals</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">50,000+</div>
              <div className="stat-label">Blood Units Managed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;