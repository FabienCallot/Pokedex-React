import { Dispatch } from 'react';

export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * It sets the height of the element to the current scroll position of the window
 */

export const currentHeight = (setitem: Dispatch<number>): any => {
  const handleHeightWindow = (): any => setitem(window.pageYOffset);
  window.addEventListener('scroll', handleHeightWindow);
  return () => {
    window.removeEventListener('scroll', handleHeightWindow);
  };
};
