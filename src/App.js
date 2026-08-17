import { useState } from 'react';
import './App.css';
import { Pads } from './Data/Pads';

function App() {
  const [pads] = useState(Pads)
  const [darkMode] = useState(true)

  return (
    <main>
      <div className="padsContainer" style={{backgroundColor : (darkMode)? "#282c34" : "#fbffdb"}}>
          {
              pads.map(pad =>(
                <button key={pad.id} style={{backgroundColor : pad.color}}>

                </button>
              )
              )

          }
      </div>
    </main>
  );
}

export default App;
