import { useEffect, useState } from 'react';
import Homepage from './pages/homepage';
import Detail from './pages/detail';
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NoConectivity from './pages/NoConnectivity';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // On initization set the isOnline state.
  useEffect(()=>{
    setIsOnline(navigator.onLine)
  },[])

  // event listeners to update the state 
  window.addEventListener('online', () => {
      setIsOnline(true)
  });

  window.addEventListener('offline', () => {
      setIsOnline(false)
  });

  return (
    <>
      {isOnline ?
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/question/:id" element={<Detail />} />
      </ Routes>
      :
      <NoConectivity/>
    }

    </>
  )
}

export default App
