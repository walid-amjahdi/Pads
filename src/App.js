import { useState } from 'react';
import './App.css';
import { Pads } from './Data/Pads';
import { Pad } from './Components/Pad';

function App() {
  const [pads] = useState(Pads)
  const [darkMode] = useState(true)

  return (
    <main>
      <div className="padsContainer" style={{backgroundColor : (darkMode)? "#282c34" : "#fbffdb"}}>
          {
              pads.map(pad =>(
                <Pad bgColor={pad.color} key={pad.id}/>
              )
              )
          }
      </div>
    </main>
  );
}

export default App;
