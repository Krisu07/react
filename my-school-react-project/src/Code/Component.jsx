import React, { useState, useEffect } from 'react';

function RandomCatFact() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts/random')
      .then(response => response.json())
      .then(data => setFact(data.text))
      .catch(error => console.error("Error fetching cat fact:", error));
  }, []);

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <p>{fact || 'Loading...'}</p>
    </div>
  );
}

export default RandomCatFact;
