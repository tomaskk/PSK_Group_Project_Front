import React from 'react';
import { Route } from 'react-router-dom';
import EmployeeTravelTable from './TravelListComponents/EmployeeTravelTable.jsx';
import Head from './TravelListComponents/Head.jsx';

export default class TravelList extends React.Component {
  render() {
    return (
      <div className="content content--bottom-square">
        <Head />
        <Route
          to="host/admin/hours"
          component={() => <EmployeeTravelTable />}
        />
      </div>
    );
  }
}
