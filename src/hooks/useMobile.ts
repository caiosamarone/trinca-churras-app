import { useEffect, useState } from 'react';

interface Mobile {
  isMobile: boolean | null;
  width: number;
}

const useMobile = (): Mobile => {
  const [width, setWidth] = useState<number>(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const checkIsMobile = () => {
    if (width == 0) {
      return null;
    }
    return width <= 768;
  };
  return {
    isMobile: checkIsMobile(),
    width,
  };
};

export default useMobile;
