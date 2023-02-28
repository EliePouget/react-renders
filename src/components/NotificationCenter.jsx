import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification.jsx';
import useShowable from '../hooks/useShowable.jsx';
import useRendersNumber from '../hooks/useRendersnumber.jsx';
import useNotificationData from '../hooks/useNotificationData.jsx';

function NotificationCenter({
  notificationData, onDelete, ...props
}) {
  const showable = useShowable(true);
  const notif = useNotificationData();
  useEffect(() => {
    showable.setIsShown(true);
  }, [notificationData]);
  return (
    <>
      <button onClick={() => showable.toggleShown()} className="notifiactions-center">
        {`[${useRendersNumber()}] ${notif.notificationsData.length} notification${(notif.notificationsData.length > 0) ? 's' : ''} ${showable.isShown ? '(show)' : '(hide)'}`}
      </button>
      {showable.isShown ? (
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
      ) : <></>}
    </>

  );
}

NotificationCenter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  notificationData: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotificationCenter;
