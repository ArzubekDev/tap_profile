'use client'
import { useEffect, useState } from "react";

export const useWindowSize = (limit = 1000) => {
  const [isLimitReached, setIsLimitReached] = useState(false);

  useEffect(() => {
    const check = () => setIsLimitReached(window.innerWidth <= limit);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [limit]);

  return isLimitReached;
};