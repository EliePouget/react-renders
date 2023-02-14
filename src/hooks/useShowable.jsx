import { useState } from 'react';

function useShowable(shown, baseClassName = '') {
  const [isShown, setIsShown] = useState(shown);

  return {
    isShown,
    toggleShown: () => setIsShown(!isShown),
    setIsShown,
    className: baseClassName + shown ? 'foldable shown' : 'foldable',
  };
}

export default useShowable;
