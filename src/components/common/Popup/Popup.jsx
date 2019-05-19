import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import PropTypes from 'prop-types';

const Popup = props => {
  const { onToggle, isOpen } = props;

  return (
    <Modal show={isOpen} onHide={onToggle} className="Popup">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onToggle}>
          Close
        </Button>
        <Button variant="primary" onClick={onToggle}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Popup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Popup;
