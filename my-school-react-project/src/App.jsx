import React from 'react';
import RandomCatFact from './Code/CatFact';
import NewFactButton from './Code/NewFactWeapon';

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <RandomCatFact />
      <NewFactButton />

      <img
        src=".Pictures/cat.jpg" 
        className="cat-image" 
      />
    </div>
  );
}

export default App;
