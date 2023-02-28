import { useState } from 'react';

function useNotificationData() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [lastNoficationId, setLastNoficationId] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);
  function addNotification() {
    setLastNoficationId(lastNoficationId + 1);
    setNotificationsData([{
      id: lastNoficationId,
      title: `Notifiaction ${(alphabet.charAt(lastNoficationId % 26))}`,
      content: 'content',
    }].concat(notificationsData));
  }
  return {
    addNotification,
    notificationsData,
  };
}

export default useNotificationData;
