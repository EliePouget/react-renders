import React, { useEffect, useState } from 'react';
import PropTypes, { node } from 'prop-types';
import FoldableCard from './FoldableCard';

function Cards({
  className, cardsData, ...props
}) {
  const [openedIndex, setOpenedIndex] = useState(null);
  const [foldableCards, setFoldableCards] = useState([]);

  useEffect(() => {
    setFoldableCards(cardsData.map((card) => (
      <FoldableCard
        key={card.id}
        title={card.title}
        opened={false}
        onToggleOpened={() => {}}
      >
        {card.content}
      </FoldableCard>
    )));
  }, [cardsData, openedIndex]);

  return (
    <div className={className}>
      {foldableCards}
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
