import React, {useEffect, useState} from 'react';
import PropTypes, { node } from 'prop-types';
import FoldableCard from './FoldableCard';
import useShowable from '../hooks/useShowable';

function Cards({
  className, cardsData, ...props
}) {
  const [fodableCards, setFodableCards] = useState([]);
  const [openedIndex, setOpenedIndex] = useState(null);
  useEffect(() => {
    setFodableCards(cardsData);
  }, [cardsData, openedIndex]);
  return (
    <div className={className}>
      {fodableCards.map((obj, indice) => (
        <FoldableCard
          key={obj.id}
          title={obj.title}
          opened={indice === openedIndex}
          onToggleOpened={(isShown) => {
            if (isShown) {
              setOpenedIndex(indice);
            }
          }}
        >
          {obj.content}
        </FoldableCard>
      ))}
    </div>
  );
}
Cards.defaultProps = {
  className: '',
  cardsData: [],
};
Cards.propTypes = {
  className: PropTypes.node,
  cardsData: PropTypes.array,
};

export default Cards;
