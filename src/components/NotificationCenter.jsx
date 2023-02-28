import React from 'react';
import PropTypes from 'prop-types';
import Notification from "./Notification.jsx";

function NotificationCenter({
  notificationData, ...props
}) {
  return (
    <>
      <div className="notifiactions-center">
        {notificationData.length}
      </div>
      <div className="notifications">
        {notificationData.map((obj) => (
          <Notification
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
  notificationData: PropTypes.arrayOf.isRequired,
};

export default NotificationCenter;
