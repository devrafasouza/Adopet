import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};
