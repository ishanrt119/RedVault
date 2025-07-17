import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DonorDashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DonorCard from '../components/DonorCard';
import RequestCard from '../components/RequestCard';
import AIInsight from '../components/AIInsight';

const DonorDashboard = () => {
  const [donor, setDonor] = useState(null);
  const [requests, setRequests] = useState([]);
  const [camps, setCamps] = useState([]);
  const [aiInsight, setAiInsight] = useState(null);

  useEffect(() => {
    // Mock data - in real app, this would come from API
    setDonor({
      name: 'John Doe',
      bloodType: 'O+',
      lastDonation: '2024-01-15',
      nextEligible: '2024-04-15',
      totalDonations: 12,
      status: 'eligible'
    });

    setRequests([
      {
        id: 1,
        hospital: 'City General Hospital',
        bloodType: 'O+',
        quantity: 3,
        urgency: 'Critical',
        location: 'Downtown',
        timePosted: '2 hours ago',
        status: 'Active'
      },
      {
        id: 2,
        hospital: 'St. Mary Medical Center',
        bloodType: 'O+',
        quantity: 2,
        urgency: 'High',
        location: 'Midtown',
        timePosted: '4 hours ago',
        status: 'Active'
      }
    ]);

    setCamps([
      {
        id: 1,
        name: 'Community Blood Drive',
        location: 'Central Park',
        date: '2024-02-20',
        time: '10:00 AM - 4:00 PM'
      },
      {
        id: 2,
        name: 'Corporate Donation Camp',
        location: 'Tech Plaza',
        date: '2024-02-25',
        time: '9:00 AM - 3:00 PM'
      }
    ]);

    setAiInsight({
      title: 'High Demand Alert',
      message: 'Your blood type O+ is in critical demand in your area. Consider donating soon!',
      bloodType: 'O+',
      locations: ['City General', 'St. Mary', 'Regional Medical']
    });
  }, []);

  if (!donor) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="donor-dashboard">
      
      
      <div className="dashboard-header">
        <div className="container">
          <div className="dashboard-welcome">
            <div className="welcome-text">
              <h1>Donor Dashboard</h1>
              <p>Welcome back, {donor.name}!</p>
            </div>
            <div className="dashboard-actions">
              <button className="notification-bell">
                🔔
                <span className="notification-badge">3</span>
              </button>
              <Link to="/login" className="btn btn-secondary">Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            {/* Donor Profile */}
            <div className="dashboard-section">
              <div className="section-header">
                <div className="section-icon">👤</div>
                <h2 className="section-title">Your Profile</h2>
              </div>
              <div className="donor-profile">
                <div className="profile-avatar">{donor.name.charAt(0)}</div>
                <div className="profile-info">
                  <h3>{donor.name}</h3>
                  <div className="blood-type-badge">{donor.bloodType}</div>
                  <div className="profile-stats">
                    <div className="stat-item">
                      <span className="stat-value">{donor.totalDonations}</span>
                      <span className="stat-label">Donations</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">36</span>
                      <span className="stat-label">Lives Saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="dashboard-section ai-insight">
              <div className="section-header">
                <div className="section-icon">🤖</div>
                <h2 className="section-title">AI Recommendations</h2>
              </div>
              <div className="ai-badge">AI POWERED</div>
              <div className="insight-content">
                <div className="insight-title">{aiInsight.title}</div>
                <div className="insight-message">{aiInsight.message}</div>
              </div>
              <div className="insight-details">
                <p><strong>Blood Type in Demand:</strong> {aiInsight.bloodType}</p>
                <p><strong>Nearby Locations:</strong> {aiInsight.locations.join(', ')}</p>
              </div>
              <button className="insight-action">Schedule Donation</button>
            </div>

            {/* Quick Stats */}
            <div className="dashboard-section">
              <div className="section-header">
                <div className="section-icon">📊</div>
                <h2 className="section-title">Quick Stats</h2>
              </div>
              <div className="quick-stats">
                <div className="quick-stat-card">
                  <span className="quick-stat-value">12</span>
                  <span className="quick-stat-label">Total Donations</span>
                </div>
                <div className="quick-stat-card">
                  <span className="quick-stat-value">36</span>
                  <span className="quick-stat-label">Lives Saved</span>
                </div>
                <div className="quick-stat-card">
                  <span className="quick-stat-value">5</span>
                  <span className="quick-stat-label">Badges Earned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blood Requests */}
          <div className="requests-section">
            <div className="requests-header">
              <h2>Urgent Blood Requests</h2>
              <button className="btn btn-primary btn-small">View All</button>
            </div>
            <div className="requests-grid">
              {requests.map(request => (
                <div key={request.id} className="request-card">
                  <div className="request-header">
                    <div>
                      <div className="hospital-name">{request.hospital}</div>
                    </div>
                    <span className={`urgency-badge urgency-${request.urgency.toLowerCase()}`}>
                      {request.urgency}
                    </span>
                  </div>
                  <div className="request-details">
                    <div className="detail-item">
                      <span className="detail-label">Blood Type</span>
                      <span className="detail-value">{request.bloodType}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Quantity</span>
                      <span className="detail-value">{request.quantity} units</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Location</span>
                      <span className="detail-value">{request.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Posted</span>
                      <span className="detail-value">{request.timePosted}</span>
                    </div>
                  </div>
                  <div className="request-actions">
                    <button className="respond-btn">Respond</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Camps */}
          <div className="camps-section">
            <h2>Upcoming Donation Camps</h2>
            <div className="camps-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Camp Name</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {camps.map(camp => (
                    <tr key={camp.id}>
                      <td>{camp.name}</td>
                      <td>{camp.location}</td>
                      <td>{camp.date}</td>
                      <td>{camp.time}</td>
                      <td>
                        <button className="register-btn-small">Register</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonorDashboard;