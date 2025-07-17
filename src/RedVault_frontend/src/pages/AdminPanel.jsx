import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPanel.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatsBox from '../components/StatsBox';

const AdminPanel = () => {
  const [stats, setStats] = useState({});
  const [fraudAlerts, setFraudAlerts] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Mock data
    setStats({
      totalDonors: 10234,
      totalHospitals: 456,
      bloodUnitsRequested: 2841,
      fraudAlertsActive: 12
    });

    setFraudAlerts([
      {
        id: 1,
        type: 'Suspicious Activity',
        description: 'Multiple requests from same IP',
        hospital: 'ABC Medical Center',
        timestamp: '2024-01-15 14:30',
        severity: 'High'
      },
      {
        id: 2,
        type: 'Duplicate Request',
        description: 'Similar blood request posted twice',
        hospital: 'XYZ Hospital',
        timestamp: '2024-01-15 13:45',
        severity: 'Medium'
      }
    ]);

    setHospitals([
      {
        id: 1,
        name: 'City General Hospital',
        location: 'Downtown',
        status: 'Active',
        totalRequests: 45,
        lastRequest: '2024-01-15'
      },
      {
        id: 2,
        name: 'St. Mary Medical Center',
        location: 'Midtown',
        status: 'Active',
        totalRequests: 32,
        lastRequest: '2024-01-14'
      }
    ]);

    setDonors([
      {
        id: 1,
        name: 'John Doe',
        bloodType: 'O+',
        status: 'Active',
        totalDonations: 12,
        lastDonation: '2024-01-10'
      },
      {
        id: 2,
        name: 'Jane Smith',
        bloodType: 'A-',
        status: 'Active',
        totalDonations: 8,
        lastDonation: '2024-01-12'
      }
    ]);
  }, []);

  const handleRemoveUser = (type, id) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      if (type === 'hospital') {
        setHospitals(hospitals.filter(h => h.id !== id));
      } else {
        setDonors(donors.filter(d => d.id !== id));
      }
    }
  };

  return (
    <div className="admin-panel">
     
      
      <div className="admin-header">
        <div className="container">
          <div className="admin-welcome">
            <div className="admin-info">
              <h1>Admin Panel</h1>
              <p>System Overview & Management</p>
            </div>
            <div className="dashboard-actions">
              <div className="admin-badge">
                🛡️ Super Admin
              </div>
              <Link to="/login" className="btn btn-secondary">Logout</Link>
            </div>
          </div>
        </div>
      </div>
      
      <main className="admin-content">
        <div className="container">
          {/* System Stats */}
          <div className="system-stats">
            <div className="admin-stat-card">
              <div className="admin-stat-icon">👥</div>
              <span className="admin-stat-value">{stats.totalDonors}</span>
              <span className="admin-stat-label">Total Donors</span>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon">🏥</div>
              <span className="admin-stat-value">{stats.totalHospitals}</span>
              <span className="admin-stat-label">Total Hospitals</span>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-icon">🩸</div>
              <span className="admin-stat-value">{stats.bloodUnitsRequested}</span>
              <span className="admin-stat-label">Blood Units Requested</span>
            </div>
            <div className="admin-stat-card warning-stat">
              <div className="admin-stat-icon">⚠️</div>
              <span className="admin-stat-value">{stats.fraudAlertsActive}</span>
              <span className="admin-stat-label">Active Fraud Alerts</span>
            </div>
          </div>

          {/* Fraud Detection Alerts */}
          <div className="fraud-section">
            <div className="fraud-header">
              <div className="fraud-title">
                <div className="fraud-icon">🚨</div>
                Fraud Detection Alerts
              </div>
            </div>
            <div className="fraud-table">
              <table className="table">
                <thead>
                  <tr>
                    <th>Alert Type</th>
                    <th>Description</th>
                    <th>Hospital</th>
                    <th>Timestamp</th>
                    <th>Severity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fraudAlerts.map(alert => (
                    <tr key={alert.id}>
                      <td>{alert.type}</td>
                      <td>{alert.description}</td>
                      <td>{alert.hospital}</td>
                      <td>{alert.timestamp}</td>
                      <td>
                        <span className={`severity-badge severity-${alert.severity.toLowerCase()}`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td>
                        <button className="investigate-btn">Investigate</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="management-grid">
            {/* Hospital Management */}
            <div className="management-section">
              <div className="management-header">
                <div className="management-icon">🏥</div>
                <h2 className="management-title">Hospital Management</h2>
              </div>
              <div className="management-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Hospital Name</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Total Requests</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitals.map(hospital => (
                      <tr key={hospital.id}>
                        <td>{hospital.name}</td>
                        <td>{hospital.location}</td>
                        <td>
                          <span className="status-active">{hospital.status}</span>
                        </td>
                        <td>{hospital.totalRequests}</td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              className="remove-btn"
                              onClick={() => handleRemoveUser('hospital', hospital.id)}
                            >
                              Remove
                            </button>
                            <button className="view-btn-admin">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Donor Management */}
            <div className="management-section">
              <div className="management-header">
                <div className="management-icon">👥</div>
                <h2 className="management-title">Donor Management</h2>
              </div>
              <div className="management-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Donor Name</th>
                      <th>Blood Type</th>
                      <th>Status</th>
                      <th>Total Donations</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.map(donor => (
                      <tr key={donor.id}>
                        <td>{donor.name}</td>
                        <td>{donor.bloodType}</td>
                        <td>
                          <span className="status-active">{donor.status}</span>
                        </td>
                        <td>{donor.totalDonations}</td>
                        <td>
                          <div className="action-buttons">
                            <button 
                              className="remove-btn"
                              onClick={() => handleRemoveUser('donor', donor.id)}
                            >
                              Remove
                            </button>
                            <button className="view-btn-admin">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;