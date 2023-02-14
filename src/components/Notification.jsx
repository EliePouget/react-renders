import React from 'react';
import PropTypes from 'prop-types';
import FoldableCard from './FoldableCard.jsx';
import Card from './Card.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Notification({
  data, children, ...props
}) {
  const titleIcon = (
    <>
      { data.title }
      <FontAwesomeIcon className="foldable-icon" icon='<FontAwesomeIcon icon="fa-solid fa-circle-xmark" />' />
    </>
  );
  return (
    <Card className="notificcation" title={titleIcon}>{data.content}</Card>
  );
}
Notification.defaultProps = {
  data: {},
  children: 'Content',

};
Notification.propTypes = {
  children: PropTypes.node,
  data: PropTypes.arrayOf,
};

export default Notification;
