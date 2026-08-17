import { useState } from 'react';
import './App.css';
import { Pads } from './Data/Pads';

function App() {
  const [pads] = useState(Pads)
  return (
    <main>
      <div className="padsContainer">
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
