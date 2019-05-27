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

    let DTO = this.props.travelsList.filter( item => {

      let thisUserIncluded = false;
      this.props.employeesList.forEach(record => {
        if(record.travel.id === item["id"] 
        && record.employee.firstName === this.props.name
        && record.employee.lastName === this.props.surname){
          thisUserIncluded = true;
        }
      });

      let item_date = new Date(Date.parse(item["startTime"]));
      return (Date.now() <= item_date && thisUserIncluded);
    });
    console.log(DTO[0])
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
      </div>
    );
  }
}
