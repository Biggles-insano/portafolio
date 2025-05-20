import React from 'react';

function LandingPage() {
  return (
    <section
      id="presentacion"
      data-aos="fade-up"
      style={{
        height: '100vh',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hola, soy Samuel </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Desarrollador Web</h2>
      <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Me gusta crear experiencias digitales modernas y funcionales. Me enfoco en combinar creatividad y técnica
        para entregar productos únicos y eficientes.
      </p>
      <a
        href="#proyectos"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          border: '2px solid #1284BF',
          borderRadius: '30px',
          color: '#e1284BF',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1284BF';
          e.currentTarget.style.color = '#fff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#1284BF';
        }}
      >
        Ver proyectos
      </a>
    </section>
  );
}

export default LandingPage;
