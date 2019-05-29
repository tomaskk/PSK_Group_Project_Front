import React from 'react';
import { connect } from 'react-redux';
import SvgHand from '../common/images/SvgHand.jsx';
import { ServerHostName } from '../../constants/serverUri';
import axios from "axios";

class InvitationRow extends React.Component {

  constructor(props) {
    super(props);

    this.handleInvitationalHandClick = this.handleInvitationalHandClick.bind(this);
  }

  componentDidMount(){
  
  }

  handleInvitationalHandClick(param) {

    let userId = -500;
    let recordId = -500;
    this.props.users.forEach(user => {
        if(user.userName == this.props.currentUser)
            userId = user.id;
    });

    if(userId < 0)
    {
        alert('Please log in first.');
    }
    else
    {
        this.props.employeeTravel.forEach(item => {
            if(item.travel.id === param && item.employee.id === userId)
                recordId = item.id;
        });


        axios.put(ServerHostName + "/api/employeeTravel/" + recordId, {
            confirm: true
            }).then(response => {
                alert('This invitation was marked as `Accepted`. Please re-enter the page.');
                console.log(response);
            });
    }
  }

  render(){
        
    return (
      <tr>
        <td>{ this.props.item.travel.name }</td>
        <td>{ this.props.item.travel.startTime.replace('T', ' | ').substring(0, 21) }</td>
        <td>{ this.props.item.travel.endTime.replace('T', ' | ').substring(0, 21) }</td>
        <td>{ this.props.item.confirm == true ? 'Accepted' : 'Invited' }</td>
        <td class="table__cell table__cell--tiny table__cell--short table__cell--last">
         <div class="table__actions">
           <a class="table__action" onClick={() => this.handleInvitationalHandClick(this.props.item.travel.id)}>
             <SvgHand />
           </a>
         </div>
       </td>
      </tr>
    );
  }
};

const mapStateToProps = state => ({
  employeeTravel: state.LDReducer.employeeTravels,
  users: state.LDReducer.filteredUsers,
});

export default connect(mapStateToProps)(InvitationRow);
