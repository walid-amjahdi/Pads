import { useState } from 'react';
import './App.css';
import { Pads } from './Data/Pads';
import { Pad } from './Components/Pad';

function App() {
  const [pads,setPads] = useState(Pads)
  const [darkMode] = useState(true)

  function togglePad(ButtonId)
  {
    setPads(prevPads => (
      prevPads.map((pad)=> (
        pad.id === ButtonId ?
          {...pad , on : !pad.on} : pad
      )
      )
    )
    )
  }

  return (
    <main>
      <div className="padsContainer" style={{backgroundColor : (darkMode)? "#282c34" : "#fbffdb"}}>
          {
              pads.map(pad =>(
                <Pad  key={pad.id} pad={pad} togglePad={togglePad}/>
              )
              )
          }
      </div>
    </main>
  );
}

export default App;
