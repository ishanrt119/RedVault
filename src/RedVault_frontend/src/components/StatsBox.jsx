import React from 'react';

const StatsBox = ({ title, value, icon, color = 'primary' }) => {
  return (
    <div className="stat-card">
      <div className="stat-value" style={{ color: color === 'primary' ? '#dc2626' : '#10b981' }}>
        {value}
      </div>
      <div className="stat-label">{title}</div>
    </div>
  );
};

export default StatsBox;