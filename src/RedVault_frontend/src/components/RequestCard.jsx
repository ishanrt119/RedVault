import React from 'react';

const RequestCard = ({ request }) => {
  const getUrgencyClass = (urgency) => {
    switch(urgency.toLowerCase()) {
      case 'critical': return 'badge-error';
      case 'high': return 'badge-warning';
      case 'medium': return 'badge-info';
      default: return 'badge-success';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="flex-between">
          <h3 className="card-title">{request.hospital}</h3>
          <span className={`badge ${getUrgencyClass(request.urgency)}`}>
            {request.urgency}
          </span>
        </div>
      </div>
      
      <div className="grid-2">
        <div>
          <p><strong>Blood Type:</strong> {request.bloodType}</p>
          <p><strong>Quantity:</strong> {request.quantity} units</p>
          <p><strong>Location:</strong> {request.location}</p>
        </div>
        
        <div>
          <p><strong>Posted:</strong> {request.timePosted}</p>
          <p><strong>Status:</strong> {request.status}</p>
          <button className="btn btn-primary btn-small">Respond</button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;