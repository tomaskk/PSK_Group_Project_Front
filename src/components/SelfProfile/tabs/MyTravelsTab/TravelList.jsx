import React from 'react';
import { Route } from 'react-router-dom';
import ColTable from './TravelListComponents/ColTable.jsx';
import UserTable from './TravelListComponents/UserTable.jsx';
import Head from './TravelListComponents/Head.jsx';

export default class TravelList extends React.Component {
  render() {
    return (
      <div className="content content--bottom-square">
        <ColTable />
        <Head />
        <Route to="host/admin/hours" component={() => <UserTable />} />
      </div>
    );
  }
}
