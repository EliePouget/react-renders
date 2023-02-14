import { useState } from 'react';

function useNotificationData() {
  const [lastNoficationId, setLastNoficationId] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);
  function addNotification() {
    setLastNoficationId(lastNoficationId + 1);
    setNotificationsData([{
      id: lastNoficationId,
      title: `Notifiaction ${lastNoficationId}`,
      content: 'content',
    }].concat(notificationsData));
  }
  return {
    addNotification,
    notificationsData,
  };
}

export default useNotificationData;
