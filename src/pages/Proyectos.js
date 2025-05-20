import React from 'react';

const proyectos = [
  {
    id: 1,
    titulo: 'by Víctor Mejía',
    descripcion: 'Portafolio visual y profesional de presentación personal.',
    imagen: 'https://cdn.ferrari.com/images/collections/new-arrivals.jpg',
    enlace: 'https://github.com/Biggles-insano/byvictormejia',
  },
  {
    id: 2,
    titulo: 'API de Incidentes',
    descripcion: 'API REST para registrar y consultar incidentes técnicos.',
    imagen: 'apidos.png',
    enlace: 'https://github.com/Biggles-insano/api',
  },
  {
    id: 3,
    titulo: 'Cronómetro usando useRef',
    descripcion: 'Cronómetro interactivo con backend en tiempo real.',
    imagen: 'useref.png',
    enlace: 'https://github.com/Biggles-insano/cronometro',
  },
  {
    id: 4,
    titulo: 'useContext',
    descripcion: 'Ejemplo práctico del uso de React Context API.',
    imagen: 'usecontextdos.png',
    enlace: 'https://github.com/Biggles-insano/usecontext',
  },
];

function Proyectos() {
  return (
    <section
      id="proyectos"
      style={{
        padding: '3rem 0',
        backgroundColor: 'transparent',
        color: '#fff',
        minHeight: '100vh',
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
        {proyectos.map(({ id, titulo, descripcion, imagen, enlace }) => (
          <a
            href={enlace}
            key={id}
            style={{
              position: 'relative',
              display: 'block',
              color: '#fff',
              textDecoration: 'none',
              overflow: 'hidden',
              height: '320px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imagen}
              alt={titulo}
              className="img-proyecto"
            />
            <div className="overlay">
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {titulo}
              </h3>
              <p style={{ fontSize: '1rem', maxWidth: '80%' }}>{descripcion}</p>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        a {
          border: none;
          outline: none;
        }

        .img-proyecto {
          width: 100%;
          height: 100%;
          max-height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          border-radius: 8px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0,0,0,0);
          opacity: 0;
          transition: all 0.4s ease;
          text-align: center;
          padding: 1rem;
          pointer-events: none;
          z-index: 1;
        }

        a:hover .img-proyecto {
          transform: scale(1.1);
          opacity: 0;
        }

        a:hover .overlay {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </section>
  );
}

export default Proyectos;