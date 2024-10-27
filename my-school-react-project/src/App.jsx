import React from 'react';
import RandomCatFact from './Code/CatFact';
import NewFactButton from './Code/NewFactWeapon';

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <RandomCatFact />
      <NewFactButton />
    </div>
  );
}

export default App;
