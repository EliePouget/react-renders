import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import useRendersNumber from '../hooks/useRendersnumber.jsx';

function Notification({
  data, children, onDelete, ...props
}) {
  const titleIcon = (
    <>
      { data.title }
      <FontAwesomeIcon className="foldable-icon" icon="fa-solid fa-circle-xmark" />
    </>
  );
  return (
    <Card onClick={() => { onDelete(data.id); }} className="notification" title={titleIcon}>{data.content}</Card>
  );
}
Notification.defaultProps = {
  data: {},
  children: 'Content',
};
Notification.propTypes = {
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
};

export default Notification;
