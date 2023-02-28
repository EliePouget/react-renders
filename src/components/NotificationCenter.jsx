import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification.jsx';

function NotificationCenter({
  notificationData, onDelete, ...props
}) {
  return (
    <>
      <div className="notifiactions-center">
        {notificationData.length}
      </div>
      <div className="notifications">
        {notificationData.map((obj) => (
          <Notification
            onDelete={onDelete}
            key={obj.id}
            data={obj}
          >
            {obj.content}
          </Notification>
        ))}
      </div>
    </>
  );
}

NotificationCenter.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
  notificationData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotificationCenter;
