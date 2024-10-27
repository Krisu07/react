import React, { useState } from 'react';

function NewFactButton() {
  const [fact, setFact] = useState('');

  const fetchNewFact = () => {
    fetch('https://cat-fact.herokuapp.com/facts/random')
      .then(response => response.json())
      .then(data => setFact(data.text))
      .catch(error => console.error("Error fetching new cat fact:", error));
  };

  return (
    <div>
      <h2>Get Another Cat Fact</h2>
      <button onClick={fetchNewFact}>New Fact</button>
      <p>{fact || 'Click the button to load a fact!'}</p>
    </div>
  );
}

export default NewFactButton;
