import React from 'react';
import CatFact from './Code/CatFact';
import NewFactButton from './Code/NewFactButton';

function App() {
  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <CatFact />
      <NewFactButton />
    </div>
  );
}

export default App;
