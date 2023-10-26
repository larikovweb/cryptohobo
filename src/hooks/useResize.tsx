import { useState, useEffect } from 'react';
import { SCREEN_LG, SCREEN_MD, SCREEN_SM } from '../utils/consts';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD && width > SCREEN_SM,
    isScreenLg: width > SCREEN_MD,
  };
};
