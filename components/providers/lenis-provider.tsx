'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Expose the Lenis instance globally so any component can call
// window.__lenis.scrollTo() for programmatic smooth-scroll navigation.
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
      infinite: false,
    });

    // Attach to window for cross-component access (navbar scroll-to)
    window.__lenis = lenis;

    // `running` flag stops the recursive RAF chain on cleanup or when tab is hidden.
    let running = true;
    // Track the current RAF ID so we can cancel it precisely on resume.
    let rafId: number;

    function raf(time: number) {
      if (!running) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    function startLoop() {
      running = true;
      rafId = requestAnimationFrame(raf);
    }

    function stopLoop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    // Page Visibility API: pause Lenis when the tab is hidden (user switches tabs),
    // resume when they return. Eliminates 60fps CPU/battery drain in background tabs.
    function handleVisibilityChange() {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    startLoop();

    return () => {
      stopLoop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
