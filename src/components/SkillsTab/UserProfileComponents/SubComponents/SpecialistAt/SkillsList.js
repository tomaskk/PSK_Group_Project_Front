import React from 'react';
import SkillRow from './SkillRow';

export default function SkillsList(props) {
  const skillRows = [...props.specialistTabItems];
  const travels = [...props.travelsList];
  const users = [...props.employeesList];
  const myName = [...props.name];
  const mySurname = [...props.surname];

  const skillRowItems = skillRows.map(skillRow => (
    <li key={skillRow.id} className="skills__row">
      <SkillRow
        knowTechName={skillRow.knowTechName}
        starCount={skillRow.stars}
      />
    </li>
  ));

  getUpcomingTravelsDTO = () => {

    //-- for each travel
    let DTO = travels.filter( item => {

      let thisUserIncluded = false;
      //-- check each record if user is travelling
      this.props.users.forEach(record => {
        if(record.travel.id === item["id"] 
        && record.employee.firstName === myName
        && record.employee.lastName === mySurname){
          thisUserIncluded = true;
        }
        //console.log("thisuserincluded: " + thisUserIncluded + "\nfirstname: " + record.employee.firstName + " | " + this.props.userInfo.name + "\nlastname: " + record.employee.lastName + " | " + this.props.userInfo.surname + "\nitem: " + item);
      });

      let item_date = new Date(Date.parse(item["startTime"]));
      return (Date.now() <= item_date && thisUserIncluded);
    });

    return DTO;
  }

  return (
    <div>
      <ul className="skills">{skillRowItems}</ul>
      

      { travels.map((item, index) => 
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ item.name }</td>
                  <td>{ item.startTime.replace('T', ' | ').substring(0, 21) }</td>
                  <td>{ item.endTime.replace('T', ' | ').substring(0, 21) }</td>
                </tr>
              )}


    </div>
  );
}
