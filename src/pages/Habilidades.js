import React from 'react';

function Habilidades() {
  const habilidades = [
    'Liderazgo',
    'Creatividad',
    'Trabajo en equipo',
    'Programación',
    'Comunicación efectiva',
    'Capacidad de análisis',
  ];

  return (
    <section
      id="habilidades"
      style={{
        minHeight: '100vh',
        padding: '3rem',
        backgroundColor: '#f8f8f8',
        color: '#222',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>
        Habilidades y CV
      </h2>

      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
        Soy estudiante de Ingeniería en Ciencias de la Computación con habilidades enfocadas en liderazgo, creatividad y trabajo en equipo. Mi experiencia incluye desarrollo de software, análisis y comunicación efectiva, buscando siempre soluciones prácticas y eficientes.
      </p>

      <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Habilidades destacadas:</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {habilidades.map((hab) => (
          <li
            key={hab}
            style={{
              backgroundColor: '#e10600',
              color: '#fff',
              padding: '0.6rem 1.2rem',
              borderRadius: '20px',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            }}
          >
            {hab}
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'center' }}>
        <a
          href="/CV Samuel Mejía.pdf"
          download
          style={{
            backgroundColor: '#e10600',
            color: '#fff',
            padding: '0.8rem 2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.1rem',
            boxShadow: '0 4px 10px rgba(225,6,0,0.5)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b20400';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e10600';
          }}
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Habilidades;