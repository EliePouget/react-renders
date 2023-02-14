import React, { useState } from 'react';
import PropTypes, { node } from 'prop-types';
import FoldableCard from './FoldableCard';
import useShowable from '../hooks/useShowable';

function Cards({
  className, cardsData, ...props
}) {
  const [openedIndex, setOpenedIndex] = useState(null);
  console.log(openedIndex);
  return (
    <div className={className}>
      {cardsData.map((obj, indice) => (
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
  cardsData: PropTypes.arrayOf + PropTypes.shape,
};

export default Cards;
