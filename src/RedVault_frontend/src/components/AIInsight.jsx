import React from 'react';

const AIInsight = ({ insight }) => {
  return (
    <div className="card" style={{ border: '2px solid #10b981' }}>
      <div className="card-header">
        <h3 className="card-title">🤖 AI Recommendation</h3>
      </div>
      
      <div className="notification notification-success">
        <strong>{insight.title}</strong>
        <p>{insight.message}</p>
      </div>
      
      <div className="flex-between">
        <div>
          <p><strong>Blood Type in Demand:</strong> {insight.bloodType}</p>
          <p><strong>Nearby Locations:</strong> {insight.locations.join(', ')}</p>
        </div>
        
        <button className="btn btn-success btn-small">
          Schedule Donation
        </button>
      </div>
    </div>
  );
};

export default AIInsight;