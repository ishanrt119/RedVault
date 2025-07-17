import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HospitalDashboard.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import StatsBox from '../components/StatsBox';

const HospitalDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Mock data
    setRequests([
      {
        id: 1,
        bloodType: 'O+',
        quantity: 3,
        urgency: 'Critical',
        status: 'Active',
        timePosted: '2 hours ago',
        responses: 5
      },
      {
        id: 2,
        bloodType: 'A-',
        quantity: 2,
        urgency: 'High',
        status: 'Fulfilled',
        timePosted: '1 day ago',
        responses: 3
      }
    ]);

    setStats({
      activeRequests: 12,
      totalRequests: 45,
      donorsResponded: 156,
      unitsReceived: 89
    });
  }, []);

  const bloodRequestFields = [
    {
      name: 'bloodType',
      label: 'Blood Type',
      type: 'select',
      required: true,
      options: [
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' }
      ]
    },
    {
      name: 'quantity',
      label: 'Quantity (units)',
      type: 'number',
      required: true,
      placeholder: 'Enter number of units needed'
    },
    {
      name: 'urgency',
      label: 'Urgency Level',
      type: 'select',
      required: true,
      options: [
        { value: 'Critical', label: 'Critical' },
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
      ]
    },
    {
      name: 'location',
      label: 'Hospital Location',
      type: 'text',
      required: true,
      placeholder: 'Enter hospital address'
    },
    {
      name: 'contact',
      label: 'Contact Number',
      type: 'tel',
      required: true,
      placeholder: 'Enter contact number'
    },
    {
      name: 'notes',
      label: 'Additional Notes',
      type: 'textarea',
      placeholder: 'Any specific requirements or notes'
    }
  ];

  const handleRequestSubmit = (formData) => {
    const newRequest = {
      id: requests.length + 1,
      ...formData,
      status: 'Active',
      timePosted: 'Just now',
      responses: 0
    };
    setRequests([newRequest, ...requests]);
    alert('Blood request posted successfully!');
  };

  return (
    <div className="hospital-dashboard">
      
      
      <div className="hospital-header">
        <div className="container">
          <div className="hospital-welcome">
            <div className="hospital-info">
              <h1>Hospital Dashboard</h1>
              <p>City General Hospital</p>
            </div>
            <div className="dashboard-actions">
              <div className="hospital-badge">
                ✅ Verified Hospital
              </div>
              <Link to="/login" className="btn btn-secondary">Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="hospital-content">
        <div className="container">
          {/* Stats Overview */}
          <div className="stats-overview">
            <div className="hospital-stat-card">
              <div className="stat-icon">📋</div>
              <span className="hospital-stat-value">{stats.activeRequests}</span>
              <span className="hospital-stat-label">Active Requests</span>
            </div>
            <div className="hospital-stat-card">
              <div className="stat-icon">📊</div>
              <span className="hospital-stat-value">{stats.totalRequests}</span>
              <span className="hospital-stat-label">Total Requests</span>
            </div>
            <div className="hospital-stat-card">
              <div className="stat-icon">👥</div>
              <span className="hospital-stat-value">{stats.donorsResponded}</span>
              <span className="hospital-stat-label">Donors Responded</span>
            </div>
            <div className="hospital-stat-card">
              <div className="stat-icon">🩸</div>
              <span className="hospital-stat-value">{stats.unitsReceived}</span>
              <span className="hospital-stat-label">Units Received</span>
            </div>
          </div>

          <div className="hospital-main-grid">
            {/* Blood Request Form */}
            <div className="hospital-section">
              <div className="hospital-section-header">
                <div className="hospital-section-icon">📝</div>
                <h2 className="hospital-section-title">Post New Blood Request</h2>
              </div>
              <div className="request-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Blood Type</label>
                    <select className="form-select" required>
                      <option value="">Select blood type</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Quantity (units)</label>
                    <input type="number" className="form-control" placeholder="Enter number of units" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Urgency Level</label>
                    <select className="form-select" required>
                      <option value="">Select urgency</option>
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Number</label>
                    <input type="tel" className="form-control" placeholder="Enter contact number" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Hospital Location</label>
                  <input type="text" className="form-control" placeholder="Enter hospital address" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-control form-textarea" placeholder="Any specific requirements or notes"></textarea>
                </div>
                <button type="submit" className="submit-btn" onClick={() => handleRequestSubmit({})}>
                  Post Request
                </button>
              </div>
            </div>

            {/* Recent Requests */}
            <div className="hospital-section">
              <div className="hospital-section-header">
                <div className="hospital-section-icon">📋</div>
                <h2 className="hospital-section-title">Your Recent Requests</h2>
              </div>
              <div className="recent-requests">
                {requests.map(request => (
                  <div key={request.id} className="recent-request-card">
                    <div className="request-card-header">
                      <div>
                        <div className="request-title">{request.bloodType} - {request.quantity} units</div>
                        <div className="request-meta">
                          <span><strong>Urgency:</strong> {request.urgency}</span>
                          <span><strong>Posted:</strong> {request.timePosted}</span>
                        </div>
                      </div>
                      <div>
                        <span className={`status-badge ${request.status === 'Active' ? 'status-active' : 'status-fulfilled'}`}>
                          {request.status}
                        </span>
                        <div className="responses-count">{request.responses} responses</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Requests Table */}
          <div className="requests-table-section">
            <div className="requests-table-header">
              <h2>All Blood Requests</h2>
              <div className="table-actions">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Active</button>
                <button className="filter-btn">Fulfilled</button>
              </div>
            </div>
            <div className="requests-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Blood Type</th>
                    <th>Quantity</th>
                    <th>Urgency</th>
                    <th>Status</th>
                    <th>Posted</th>
                    <th>Responses</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map(request => (
                    <tr key={request.id}>
                      <td>{request.bloodType}</td>
                      <td>{request.quantity} units</td>
                      <td>
                        <span className={`table-badge urgency-${request.urgency.toLowerCase()}`}>
                          {request.urgency}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${request.status === 'Active' ? 'status-active' : 'status-fulfilled'}`}>
                          {request.status}
                        </span>
                      </td>
                      <td>{request.timePosted}</td>
                      <td>{request.responses}</td>
                      <td>
                        <button className="view-btn">View</button>
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

export default HospitalDashboard;