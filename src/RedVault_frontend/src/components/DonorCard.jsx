import React from 'react';

const DonorCard = ({ donor }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{donor.name}</h3>
        <p className="card-subtitle">Blood Type: {donor.bloodType}</p>
      </div>
      
      <div className="flex-between">
        <div>
          <p><strong>Last Donation:</strong> {donor.lastDonation}</p>
          <p><strong>Next Eligible:</strong> {donor.nextEligible}</p>
          <p><strong>Total Donations:</strong> {donor.totalDonations}</p>
        </div>
        
        <div>
          <span className={`badge ${donor.status === 'eligible' ? 'badge-success' : 'badge-warning'}`}>
            {donor.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;