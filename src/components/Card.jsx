import React from 'react';
import PropTypes from 'prop-types';
import useRendersNumber from '../hooks/useRendersnumber.jsx';

function Card({
  onClick, title, className, children, ...props
}) {
  return (
    <button onClick={onClick} className={`card ${className}`}>
      <header className="card__header header__title">
        [
        {useRendersNumber()}
        ]
        {' '}
        {title}
      </header>
      <section className="card__main">{children}</section>
    </button>
  );
}
Card.defaultProps = {
  title: 'Title',
  children: 'Content',
  className: 'shown',
  onClick: () => {},
};
Card.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  className: PropTypes.node,
  onClick: PropTypes.func,
};

export default Card;
