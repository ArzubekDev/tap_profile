// hooks/useSmoothScroll.ts
export const useSmoothScroll = () => {
  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {

      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return { scrollToAnchor };
};