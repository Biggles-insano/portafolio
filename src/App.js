import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import Proyectos from './pages/Proyectos';
import Habilidades from './pages/Habilidades';
import Ascensor from './pages/Ascensor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: "url('/fondo.png')", 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto', 
        backgroundPosition: 'top center',
        backgroundAttachment: 'scroll',  
        scrollBehavior: 'smooth',
        backgroundColor: '#A8E61C'
      }}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <div style={{ paddingTop: '5px' }}>
          <Ascensor />
          <LandingPage />
          <Proyectos />
          <Habilidades />
        </div>
      )}
    </div>
  );
}

export default App;
