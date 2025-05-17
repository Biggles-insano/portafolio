import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LandingPage from './pages/LandingPage';
import Proyectos from './pages/Proyectos';
import Habilidades from './pages/Habilidades';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        scrollBehavior: 'smooth',
        minHeight: '100vh',
        backgroundColor: loading ? '#0f172a' : '#ffffff',
      }}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div style={{ paddingTop: '5px' }}>
            <LandingPage />
            <Proyectos />
            <Habilidades />
          </div>
        </>
      )}
    </div>
  );
}

export default App;