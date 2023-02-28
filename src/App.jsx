import React from 'react';
import Cards from './components/Cards';
import cardsData from './constants/cardsData';
import useNotificationData from './hooks/useNotificationData';
import NotificationCenter from './components/NotificationCenter.jsx';
import useRendersNumber from './hooks/useRendersnumber.jsx';

function App() {
  const notif = useNotificationData();

  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">
          {' '}
          [
          {useRendersNumber()}
          ] Introduction to React
        </h1>
      </header>
      <main className="app__main">
        <button className="btn" type="button" onClick={notif.addNotification}> Add a notifiaction</button>
        <Cards className="cards" cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">
        <NotificationCenter
          notificationData={notif.notificationsData}
          onDelete={notif.deleteNotification}
        />
      </footer>
    </div>
  );
}

export default App;
