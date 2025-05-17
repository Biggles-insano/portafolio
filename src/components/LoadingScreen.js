import React from 'react';

function LoadingScreen() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0f172a', 
      color: '#f1f5f9',
      fontFamily: "'Playfair Display', serif",
    }}>
      <img src="/logo.png" alt="Logo" style={{ width: 120, marginBottom: 20 }} />
    </div>
  );
}

export default LoadingScreen;