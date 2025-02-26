'use client'

import { useCallback, useEffect, useRef } from 'react'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${event.clientX}px`;
        glowRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-32 h-32 bg-accent opacity-50 rounded-full blur-3xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <Particles
        className="absolute inset-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ['grab', 'bubble'],
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.4,
                color: '#00FF94',
              },
            },
          },
          particles: {
            color: {
              value: '#2DD4BF',
            },
            links: {
              color: '#2DD4BF',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
} 