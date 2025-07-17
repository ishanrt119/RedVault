import React from 'react';

const NotificationBar = ({ notifications }) => {
  if (!notifications || notifications.length === 0) return null;

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div key={index} className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;