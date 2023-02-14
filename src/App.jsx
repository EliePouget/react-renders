import React from "react";
import Cards from "./components/Cards";
import cardsData from "./constants/cardsData";
import useNotificationData from "./hooks/useNotificationData";

function App() {
  const notif = useNotificationData();
  const taille = notif.notificationsData.length;
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <button className="btn" onClick={() => notif.addNotification}> Add a notifiaction</button>
        <Cards className="cards" cardsData={cardsData} />
      </main>
      <footer className="app__footer footer"> {`${taille} notification${(taille > 0) ? 's' : ''}`} </footer>
    </div>
  );
}

export default App;
