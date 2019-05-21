import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import PropTypes from 'prop-types';

const UserPopup = props => {
  const { onToggle, isOpen, userInfo } = props;

  return (
    <Modal show={isOpen} onHide={onToggle} className="Popup">
      <Modal.Header closeButton>
        <Modal.Title> <h4>Profile of {userInfo.name} {userInfo.surname} </h4></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>'You got urself looking into</h4>
        <h3> Mr. {userInfo.name} {userInfo.surname} </h3>
        <hr/>
        <h4> My pic {userInfo.pic} </h4>
        <h4> Topic {userInfo.topic} </h4>
        <h4> date {userInfo.date} </h4>
        <h4> Hours {userInfo.hours} </h4>
        
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onToggle}>
          Close window
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

UserPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default UserPopup;
