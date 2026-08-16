import { useState } from 'react';
import './App.css';
import { Pads } from './Data/Pads';

function App() {
  const [pads,setPads] = useState(Pads)
  return (
    <main>
      <div className="padsContainer">
          {
            <ul>{
              pads.map(pad =>(
                <button key={pad.id} color='pad.color'>

                </button>
              )
              )}
            </ul>
          }
      </div>
    </main>
  );
}

export default App;
