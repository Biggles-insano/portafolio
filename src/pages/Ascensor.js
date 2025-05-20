import React, { useEffect, useState } from 'react';

function Ascensor() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="ascensor"
      style={{
        position: 'fixed',
        left: '20px',
        top: 0, // anclado arriba, se moverá con transform
        transform: `translateY(${scrollY}px)`,
        zIndex: 999,
        transition: 'transform 0.1s linear'
      }}
    >
      <img src="/nave.png" alt="Ascensor" style={{ width: '60px' }} />
    </div>
  );
}

export default Ascensor;
