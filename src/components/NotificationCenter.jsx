import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import useShowable from '../hooks/useShowable';
import useRendersNumber from '../hooks/useRendersnumber';
import useNotificationData from '../hooks/useNotificationData';

function NotificationCenter({
  notificationData, onDelete, ...props
}) {
  const showable = useShowable(true);
  const [isNotifcation, setNotification] = useState([]);
  const notifData = useNotificationData();

  useEffect(() => {
    setNotification(notificationData.map((notif) => (
      <Notification
        onDelete={onDelete}
        key={notif.id}
        data={notif}
      >
        {notif.content}
      </Notification>
    )));
  }, [notificationData]);
  useEffect(() => {
    showable.setIsShown(true);
  }, [notificationData]);

  return (
    <>
      <button onClick={() => showable.toggleShown()} className="notifiactions-center">
        {`[${useRendersNumber()}] ${notifData.lastNoficationId} notification${(notifData.notificationsData.length > 0) ? 's' : ''} ${showable.isShown ? '(show)' : '(hide)'}`}
      </button>
      {showable.isShown ? (
        <div className="notifications">
          {isNotifcation}
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
