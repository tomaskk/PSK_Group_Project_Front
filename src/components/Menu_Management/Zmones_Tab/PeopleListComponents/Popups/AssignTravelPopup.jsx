import React from 'react';
import { Button, Modal, Table, Form } from 'react-bootstrap';

import PropTypes from 'prop-types';

  const AssignTravelPopup = props => {
  const { onToggle, isOpen, userInfo } = props;
  const items = ['abc123', 'abc234', 'chi001', 'kno223', 'vno890'];

  return (

    <Modal show={isOpen} onHide={onToggle} className="Popup" size = "lg" centered>
      <Modal.Header>
        <Modal.Title> 
          <h4>
            Selected person: &nbsp; <b><i> {userInfo.name} {userInfo.surname} </i></b> 
            <img src={userInfo.pic} alt="Profile pic" height="42" width="42" style={{borderRadius: "50%", marginLeft: "24px"}}/> 
          </h4>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>User's details:</h5>
        <Table responsive bordered>
          <tbody>
            <tr>
              <td width="25%"> E-mail address </td>
              <td width="75%"> random@mail.com </td>
            </tr>
            <tr>
              <td width="25%"> Status </td>
              <td width="75%"> {userInfo.activity} </td>
            </tr>
          </tbody>
        </Table>

        <h5>Invite <b>{userInfo.name}</b> to travel:</h5>
        <Form>
          <Form.Group>
            <Form.Control as="select">
              {items.map(item => (
                <option>{item}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onToggle}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onToggle}>
          Send invitation
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

AssignTravelPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default AssignTravelPopup;
