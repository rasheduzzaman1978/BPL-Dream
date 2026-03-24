


import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectecPlayers/SelectedPlayers';
import { Suspense, useState } from 'react';

const fetchPlayers = async ()=> {
  const res = await fetch('/players.json')
  return res.json();
}

function App() {
  const [toggle, setToggle] = useState(true);
  
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  
  const playersPromise = fetchPlayers();
  return (
    <>

      <Navbar availableBalance={availableBalance}></Navbar>
      {/* Available/Selected Players  */}
      <div className='max-w-6xl mx-auto flex justify-between items-center'>

      <h1 className='text-[28px] font-bold'>
  {toggle === true ? "Available Players" : "Selected Players (2/6)"}
</h1>

      <div>
        <button onClick={() => setToggle(true)} className={`py-3 px-6 border border-gray-400 rounded-l-2xl font-bold border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
        <button onClick={() => setToggle(false)} className={`py-3 px-6 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>(0)</span></button>
      </div>
      </div>
      
      {
        toggle === true 
        ? <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <AvailablePlayers setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> 
      : <SelectedPlayers></SelectedPlayers> 

      }

          
    </>
  )
}

export default App
