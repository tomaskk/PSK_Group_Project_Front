/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button, Modal, Table, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

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

  handleSendInvitationClick(closePopup){

  }

  render(){
    const { onToggle, isOpen, userInfo } = this.props;
    const items = ['abc123', 'abc234', 'chi001', 'kno223', 'vno890'];

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
                {this.getTravelsDTO().map(item => (
                  <option> [{item.startTime.substring(0, 10)} - {item.endTime.substring(0, 10)}] { item.name }  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>

          <h5> Pick apartments (if needed) </h5>
          <Form>
            <Form.Group>
              <Form.Control as="select" value={this.state.pickedApartment} onChange={e => this.handlePickApartment(e)}>
                <option>Pick an apartment...</option>
                {this.getApartmentsDTO().map(item => (
                  <option> { item.title } | { item.address }</option>
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
  }
};

const mapStateToProps = state => ({
  travelsList: state.LDReducer.travelsList,
  employeeTravel: state.LDReducer.employeeTravel,
  apartmentsList: state.LDReducer.apartmentsList,
});

export default connect(mapStateToProps)(AssignTravelPopup);

AssignTravelPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
};

