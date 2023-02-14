import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Card from './Card';
import useShowable from '../hooks/useShowable';

library.add(fas);

function FoldableCard({
  title, opened, onToggleOpened, children, ...props
}) {
  const showable = useShowable(opened);
  useEffect(() => {
    showable.setIsShown(opened);
  }, [opened]);
  const titleIcon = (
    <>
      { title }
      <FontAwesomeIcon className="foldable-icon" icon={`fa-solid ${showable.isShown ? 'fa-circle-minus' : 'fa-circle-plus'}`} />
    </>
  );
  return (
    <Card onClick={() => {showable.toggleShown(); onToggleOpened(!showable.isShown);}} title={titleIcon} className={showable.className}>
      {showable.isShown && children}
    </Card>
  );
}

FoldableCard.defaultProps = {
  title: 'Title',
  children: 'Content',
  opened: false,
  onToggleOpened: () => {},
};
FoldableCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  opened: PropTypes.bool,
  onToggleOpened: PropTypes.func,
};

export default FoldableCard;
