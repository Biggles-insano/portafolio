import React from 'react';

function LandingPage() {
  return (
    <section
      id="presentacion"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <img src="/foto.jpg" alt="Mi foto" style={{ width: '150px', borderRadius: '50%', marginBottom: '1rem' }} />
      <h1>Hola, soy Samu</h1>
      <h2>Desarrollador Web</h2>
      <p>Apasionado por crear experiencias digitales modernas y funcionales.</p>
      <a href="#proyectos" style={{ marginTop: '1rem', fontWeight: 'bold', textDecoration: 'none' }}>
        Ver proyectos ↓
      </a>
    </section>
  );
}

export default LandingPage;