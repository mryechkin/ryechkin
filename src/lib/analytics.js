/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import * as Panelbear from '@panelbear/panelbear-js';
import { useRouter } from 'next/router';

export const usePanelbear = (site, config = {}) => {
  const router = useRouter();

  useEffect(() => {
    Panelbear.load(site, config);

    // Trigger initial page view
    Panelbear.trackPageview();

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Panelbear.trackPageview();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [site]);
};

export const trackRickRoll = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV === 'production') Panelbear.track('RickRoll');
};

export default usePanelbear;
