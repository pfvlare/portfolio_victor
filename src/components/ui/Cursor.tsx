'use client';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};

const Cursor = ({ className = '' }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);
    setEnabled(true);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`fixed w-[100%] h-[140%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default Cursor;