import './index.css';
import Wordle from './components/Wordle.js'
import { useState, useEffect } from 'react';

function App() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    fetch('./words.json')
      .then(res => res.json())
      .then(data => {
        var id = Math.floor(Math.random()*data.words.length)
        setWord(data.words[id]);
      })
  }, [setWord])
  
  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {word && <Wordle solution={word} />}
    </div>
  );
}

export default App;


// https://api.dictionaryapi.dev/api/v2/entries/en/beats