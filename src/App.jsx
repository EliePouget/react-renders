import React from 'react';
import Card from './components/Card';
import FoldableCard from './components/FoldableCard';
import Cards from './components/Cards';
import cardsData from './constants/cardsData';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <Cards className="cards" cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;
