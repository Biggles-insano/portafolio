import React from 'react';

const proyectos = [
  {
    id: 1,
    titulo: 'by Víctor Mejía',
    imagen: 'https://cdn.ferrari.com/images/collections/new-arrivals.jpg',
    enlace: 'https://github.com/Biggles-insano/byvictormejia',
  },
  {
    id: 2,
    titulo: 'API de Incidentes',
    imagen: 'https://cdn.ferrari.com/images/magazine/speed-beauty.jpg',
    enlace: 'https://github.com/Biggles-insano/api',
  },
  {
    id: 3,
    titulo: 'Cronómetro con Node.js',
    imagen: 'https://cdn.ferrari.com/images/racing/cars.jpg',
    enlace: 'https://github.com/Biggles-insano/cronometro',
  },
  {
    id: 4,
    titulo: 'useContext',
    imagen: 'https://cdn.ferrari.com/images/experiences/events.jpg',
    enlace: 'https://github.com/Biggles-insano/usecontext',
  },
];

function Proyectos() {
  return (
    <section
      id="proyectos"
    
      style={{
        padding: '0',
        backgroundColor: 'transparent',
        color: '#fff',
        minHeight: '100vh',
        padding: '3rem 0'

      }}
    >
      <h2 style={{ textAlign: 'center', margin: '3rem 0', fontSize: '2.5rem', fontWeight: 'bold' }}>
        Proyectos Destacados
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0',
          maxWidth: '1200px',
          margin: '0 auto',
          height: 'calc(100vh - 120px)',
        }}
      >
        {proyectos.map(({ id, titulo, imagen, enlace }) => (
          <a
            href={enlace}
            key={id}
            style={{
              position: 'relative',
              display: 'block',
              color: '#fff',
              textDecoration: 'none',
              overflow: 'hidden',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imagen}
              alt={titulo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
              className="img-proyecto"
            />
            <div
              className="overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.4)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              {titulo.includes(' - ') ? (
                <>
                  <p style={{ fontSize: '1rem', letterSpacing: '3px', marginBottom: '0.5rem' }}>
                    {titulo.split(' - ')[0].toUpperCase()}
                  </p>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    {titulo.split(' - ')[1].toUpperCase()}
                  </h3>
                </>
              ) : (
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  {titulo.toUpperCase()}
                </h3>
              )}

              <button
                style={{
                  marginTop: '1.5rem',
                  border: '1.5px solid white',
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#111';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Descubrir
              </button>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        a:hover .img-proyecto {
          transform: scale(1.1);
        }
        a:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export default Proyectos;
