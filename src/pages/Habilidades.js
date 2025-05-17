import React from 'react';

function Habilidades() {
  return (
    <section id="habilidades" style={{ minHeight: '100vh', padding: '2rem' }}>
      <h2>Habilidades y CV</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML / CSS</li>
        {/* ... otras habilidades */}
      </ul>
      <p>Puedes descargar mi CV aquí:</p>
      <a href="/cv.pdf" download>Descargar CV</a>
    </section>
  );
}

export default Habilidades;