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
        padding: '3rem 1.5rem',
        backgroundColor: '#f8f8f8',
        color: '#222',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>
        Habilidades y CV
      </h2>

      <p style={{
        fontSize: '1.1rem',
        marginBottom: '2rem',
        lineHeight: '1.6',
        maxWidth: '800px',
        marginInline: 'auto'
      }}>
        Soy estudiante de Ingeniería en Ciencias de la Computación con habilidades enfocadas en liderazgo, creatividad y trabajo en equipo. Mi experiencia incluye desarrollo de software, análisis y comunicación efectiva, buscando siempre soluciones prácticas y eficientes.
      </p>

      <h3 style={{ fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>
        Habilidades destacadas:
      </h3>

      <ul style={{
        listStyle: 'none',
        paddingLeft: 0,
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        {habilidades.map((hab) => (
          <li
            key={hab}
            style={{
              border: '1.5px solid #333',
              color: '#333',
              backgroundColor: 'transparent',
              padding: '0.5rem 1.2rem',
              borderRadius: '40px',
              fontWeight: 500,
              fontSize: '1rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e10600';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = '#e10600';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#333';
              e.currentTarget.style.borderColor = '#333';
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
            display: 'inline-block',
            border: '1.5px solid #e10600',
            backgroundColor: 'transparent',
            color: '#e10600',
            padding: '0.8rem 2rem',
            borderRadius: '40px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e10600';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#e10600';
          }}
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default Habilidades;