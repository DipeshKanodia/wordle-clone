import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch('./words.json')
      .then(res => res.json())
      .then(data => {
        // random int between 0 & 14
        var id = Math.floor(Math.random()*data.words.length)
        setWord(data.words[id]);
      })
  }, [])
  
  return (
    <div className="App">
      {/* <button onClick={readJsonFile}>Read JSON File</button> */}
      {word && <h1>word is: {word}</h1>}
    </div>
  );
}

export default App;


// https://api.dictionaryapi.dev/api/v2/entries/en/beats