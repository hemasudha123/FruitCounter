import './App.css';
import React, { useState } from 'react'
function App() {
  const [mango, setMango] = useState(0)
  const [banana, setBanana] = useState(0)
  return (
    <div className="fruits-Container">
      <div className="fruitsParent">
        <h1 className='title'>Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas</h1>
        <div className="fruitsimages">
          <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango" className='mango' />
          <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png " alt="banana" className='mango' />
        </div>
        <div className='fruitsbuttons'>
          <button onClick={() => setMango(mango + 1)}>Eat Mango</button>
          <button onClick={() => setBanana(banana + 1)}>Eat Banana</button>
        </div>
      </div>
    </div>
  );
}

export default App;
