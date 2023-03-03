import { useState } from 'react';

function useCompteur() {
  const [compteur, setCompteur] = useState(0);

  return {
    compteur,
    incrementCompteur: () => setCompteur(compteur + 1),
    setCompteur,
  };
}

export default useCompteur;
