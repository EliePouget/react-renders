import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import useRendersNumber from "../hooks/useRendersnumber.jsx";

function Notification({
  data, children, ...props
}) {
  const titleIcon = (
    <>
      [{useRendersNumber()}]
      { data.title }
      <FontAwesomeIcon className="foldable-icon" icon="fa-solid fa-circle-xmark" />
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
