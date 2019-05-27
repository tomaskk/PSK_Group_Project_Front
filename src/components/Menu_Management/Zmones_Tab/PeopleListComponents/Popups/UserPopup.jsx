import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

import PropTypes from 'prop-types';

  //const UserPopup = props => {
class UserPopup extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    
  }

  render(){
    const { onToggle, isOpen, userInfo } = this.props;
    const items = ['Apple', 'Orange', 'Banana', 'Pear'];
        
    return (
      <Modal show={isOpen} onHide={onToggle} className="Popup" size = "lg" centered>
        <Modal.Header>
          <Modal.Title> 
            <h4>
              Profile of <b><i> {userInfo.name} {userInfo.surname} </i></b> 
              <img 
                src={ userInfo.pic == null ? 'https://www.w3schools.com/howto/img_avatar.png'
                    : userInfo.pic == 'string' ? 'https://www.w3schools.com/howto/img_avatar2.png' 
                    : userInfo.pic }
                alt="Profile pic" height="42" width="42" style={{borderRadius: "50%", marginLeft: "24px"}}/> 
            </h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>Personal details:</h5>
          <Table responsive bordered>
            <tbody>
              <tr>
                <td width="25%"> E-mail address </td>
                <td width="75%"> { userInfo.email } </td>
              </tr>
              <tr>
                <td width="25%"> Status </td>
                <td width="75%"> { userInfo.available == true ? 'Active' : 'Inactive' } </td>
              </tr>
            </tbody>
          </Table>

          <h5>Upcoming travels:</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Start time</th>
                <th>End time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CHI-3000</td>
                <td>2020-10-12</td>
                <td>2021-10-12</td>
              </tr>
            </tbody>
          </Table>

          <h5>Past travels:</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Start time</th>
                <th>End time</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => 
                <tr>
                  <td>X</td>
                  <td>{item}</td>
                  <td>2010-10-16</td>
                  <td>2010-10-17</td>
                </tr>
              )}
            </tbody>
          </Table>

          <h5><b>{userInfo.name}</b>'s created travels:</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Start time</th>
                <th>End time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>CHI-998</td>
                <td>2010-10-10</td>
                <td>2010-10-11</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={onToggle}>
            Close window
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

UserPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default UserPopup;
