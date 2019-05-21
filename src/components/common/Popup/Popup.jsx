import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Popup = props => {
  const { onExit, onCancel, onAccept, isOpen, title, children } = props;

  return (
    <Modal show={isOpen} onHide={onExit} className="Popup">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {children && <Modal.Body>{children}</Modal.Body>}
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={onAccept}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Popup.propTypes = {
  onExit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Popup.defaultProps = {
  children: null,
};

export default Popup;
