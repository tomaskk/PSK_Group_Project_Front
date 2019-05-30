import React from 'react';
import SkillRow from './SkillRow';
import { Table } from 'react-bootstrap';

import { Component } from 'react';

//export default function SkillsList(props)


export default class SkillsList extends Component {
  constructor(props){
    super(props);
    
  }

  getUpcomingTravelsDTO = () => {

    let DTO = this.props.employeesList.filter( item => {

      //-- for each travel
      let thisUserIncluded = false;
      //-- check each record if user is travelling
        if( item.employee.firstName === this.props.name
        && item.employee.lastName === this.props.surname){
          thisUserIncluded = true;
        }

      let item_date = new Date(Date.parse(item.travel.startTime));
      return (Date.now() <= item_date && thisUserIncluded);
    });

    return DTO;
  }
  
  render(){
    const skillRows = [...this.props.specialistTabItems];
  
    const skillRowItems = skillRows.map(skillRow => (
      <li key={skillRow.id} className="skills__row">
        <SkillRow
          knowTechName={skillRow.knowTechName}
          starCount={skillRow.stars}
        />
      </li>
    ));

    return (
      <div>      
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              { this.getUpcomingTravelsDTO().map((item, index) => 
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ item.travel.name }</td>
                  <td>{ item.travel.startTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.travel.endTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.confirm == true ? 'Accepted' : 'Invited' }</td>
                </tr>
              )}
            </tbody>
          </Table>
      </div>
    );
  }
}
