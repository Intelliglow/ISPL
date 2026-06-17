import { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [waves, setWaves] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother movement
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isClickable);
    };

    const handleClick = (e) => {
      const newWave = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setWaves((prevWaves) => [...prevWaves, newWave]);

      // Remove wave after animation completes
      setTimeout(() => {
        setWaves((prevWaves) => prevWaves.filter((wave) => wave.id !== newWave.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="cursor-wave"
          style={{
            left: `${wave.x}px`,
            top: `${wave.y}px`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
