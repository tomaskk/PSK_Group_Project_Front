import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class UserPopup extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  
  }

  getUpcomingTravelsDTO = () => {

    //-- for each travel
    let DTO = this.props.travelsList.filter( item => {

      let thisUserIncluded = false;
      //-- check each record if user is travelling
      this.props.employeeTravel.forEach(record => {
        if(record.travel.id === item["id"] 
        && record.employee.firstName === this.props.userInfo.name
        && record.employee.lastName === this.props.userInfo.surname){
          thisUserIncluded = true;
        }
        //console.log("thisuserincluded: " + thisUserIncluded + "\nfirstname: " + record.employee.firstName + " | " + this.props.userInfo.name + "\nlastname: " + record.employee.lastName + " | " + this.props.userInfo.surname + "\nitem: " + item);
      });

      let item_date = new Date(Date.parse(item["startTime"]));
      return (Date.now() <= item_date && thisUserIncluded);
    });

    return DTO;
  }

  getPastTravelsDTO = () => {

    //-- for each travel
    let DTO = this.props.travelsList.filter( item => {

      let thisUserIncluded = false;
      //-- check each record if user has participated
      this.props.employeeTravel.forEach(record => {
        if(record.travel.id === item["id"] 
        && record.employee.firstName === this.props.userInfo.name
        && record.employee.lastName === this.props.userInfo.surname){
          thisUserIncluded = true;
        }
      });

      let item_date = new Date(Date.parse(item["startTime"]));
      return (Date.now() > item_date && thisUserIncluded);
    });

    return DTO;
  }

  getCreatedTravelsDTO = () => {

    //-- check each travel
    let DTO = this.props.travelsList.filter( item => {

      let thisUserIsCreator = false;
      if(item.organizedBy.firstName === this.props.userInfo.name 
      && item.organizedBy.lastName === this.props.userInfo.surname){
        thisUserIsCreator = true;
      }

      return (thisUserIsCreator);
    });

    return DTO;
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
              { this.getUpcomingTravelsDTO().map((item, index) => 
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ item.name }</td>
                  <td>{ item.startTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.endTime.replace('T', ' | ').substring(0, 21) }</td>
                </tr>
              )}
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
              { this.getPastTravelsDTO().map((item, index) => 
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ item.name }</td>
                  <td>{ item.startTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.endTime.replace('T', ' | ').substring(0, 21) }</td>
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
            { this.getCreatedTravelsDTO().map((item, index) => 
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ item.name }</td>
                  <td>{ item.startTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.endTime.replace('T', ' | ').substring(0, 21) }</td>
                </tr>
              )}
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

const mapStateToProps = state => ({
  travelsList: state.LDReducer.travelsList,
  employeeTravel: state.LDReducer.employeeTravel,
});

export default connect(mapStateToProps)(UserPopup);

UserPopup.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
};