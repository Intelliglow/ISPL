import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [waves, setWaves] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let rafId;

    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      
      rafId = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.setProperty('--cursor-x', `${clientX}px`);
          dotRef.current.style.setProperty('--cursor-y', `${clientY}px`);
        }
        if (glowRef.current) {
          glowRef.current.style.setProperty('--cursor-x', `${clientX}px`);
          glowRef.current.style.setProperty('--cursor-y', `${clientY}px`);
        }
      });
      
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isClickable);
    };

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    const newWave = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
    };
    setWaves((prevWaves) => [...prevWaves, newWave]);

    // Remove wave after animation completes
    setTimeout(() => {
      setWaves((prevWaves) => prevWaves.filter((wave) => wave.id !== newWave.id));
    }, 1000);
  };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
      />
      <div
        ref={glowRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      />
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="cursor-wave"
          style={{
            '--wave-x': `${wave.x}px`,
            '--wave-y': `${wave.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
