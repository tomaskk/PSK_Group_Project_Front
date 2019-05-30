/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button, Modal, Table, Form, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import axios from "axios";
import { ServerHostName } from '../../../../../constants/serverUri.js';

class AssignTravelPopup extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      pickedTravel: 'blank',
      pickedApartment: 'blank'
    };
  }

  componentDidMount(){
    
  }

  getApartmentsDTO = () => {
    return this.props.apartmentsList;
  }

  getTravelsDTO = () => {
    return this.props.travelsList;
  }

  handlePickTravel(e) {
    this.setState({
      pickedTravel: e.target.value
    });
  }

  handlePickApartment(e) {
    this.setState({
      pickedApartment: e.target.value
    });
  }

  handleSendInvitationClick(e) {
    e.preventDefault();
  
    //-- get correct IDs
    let userId = -500;
    let travellingId = -500;
    let apartId = -500;

    this.props.filteredUsers.forEach(user => {
      if(user.firstName === this.props.userInfo.name && user.lastName === this.props.userInfo.surname){
        userId = user.id;
      }
    });

    this.props.travelsList.forEach(travel => {
      if(travel.startTime.substring(0, 10) === this.state.pickedTravel.substring(1, 11) 
      && travel.name === this.state.pickedTravel.substring(26)){
        travellingId = travel.id;
      }
    });

    //alert(this.state.pickedTravel + '\n' + this.state.pickedApartment + '\n user: ' + userId + '\n travel: ' + travellingId);

    //-- add new EmployeeTravel record (to appear in my profile for user to accept/deny)
    axios.post(ServerHostName + '/api/EmployeeTravel', {
      employeeId: userId, 
      travelId: travellingId,
      //apartmentId: apartId
      confirm: false,
    })
    .then(response => {
        console.log(response);
        alert('Invitation has been sent.');
    })
    .catch(error => {
      alert('Failed attempt.');
      console.log(error);
  });

    this.props.onToggle(e);
  }

  render(){
    const { onToggle, isOpen, userInfo } = this.props;

    return (
      <Modal show={isOpen} onHide={onToggle} className="Popup" size="lg" centered>
        <Modal.Header>
          <Modal.Title> 
            <h4>
              Selected person: &nbsp; <b><i> {userInfo.name} {userInfo.surname} </i></b> 
              <img 
                src={ userInfo.pic == null ? 'https://www.w3schools.com/howto/img_avatar.png'
                    : userInfo.pic == 'string' ? 'https://www.w3schools.com/howto/img_avatar2.png' 
                    : userInfo.pic }
                alt="Profile pic" height="42" width="42" style={{borderRadius: "50%", marginLeft: "24px"}}/> 
            </h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>User's details:</h5>
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

          <h5>Invite <b>{userInfo.name}</b> to travel:</h5>
          <Form>
            <Form.Group>
              <Form.Control as="select" value={this.state.pickedTravel} onChange={e => this.handlePickTravel(e)}> 
                <option>Pick a travel...</option>
                {this.getTravelsDTO().map((item, index) => (
                  <option> [{item.startTime.substring(0, 10)} - {item.endTime.substring(0, 10)}] { item.name }  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>

          <h5> Are apartments needed? </h5>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label='Checkbox for following text input' />
            </InputGroup.Prepend>
            <Form.Control aria-label='Text input with checkbox' value='Pick apartments automatically' readOnly/>
          </InputGroup>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onToggle}>
            Cancel
          </Button>
          <Button variant="primary" onClick={e => this.handleSendInvitationClick(e)}>
            Send invitation
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

const mapStateToProps = state => ({
  travelsList: state.LDReducer.travelsList,
  employeeTravel: state.LDReducer.employeeTravel,
  apartmentsList: state.LDReducer.apartmentsList,
  filteredUsers: state.LDReducer.filteredUsers,
});

export default connect(mapStateToProps)(AssignTravelPopup);

AssignTravelPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
};

