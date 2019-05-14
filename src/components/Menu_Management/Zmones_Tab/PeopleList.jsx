import React from "react";
import ColTable from './PeopleListComponents/ColTable.jsx';
import UserTable from "./PeopleListComponents/UserTable.jsx";
import SvgDownload from "./PeopleListComponents/images/SvgDownload.jsx"
import { CSVLink } from "react-csv";
import Head from "./PeopleListComponents/Head.jsx"
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PeopleList extends React.Component {
  constructor(props) {
    super(props);
  }
// Render-------------------------------------------

  render() {
    
    return (
      <main className="main">
        <div class="admin__header">
          <h1 className="heading1" style={{ float: "left" }}>
            Management
          </h1>
          <a href="" class="button button--primary button--spaced admin__action">
          <CSVLink style={CSVStyle} data={this.props.users} filename="AllUsers.csv">
            <SvgDownload/>
              Download as CSV
            </CSVLink>
            </a>
        </div>
        <div className="content content--bottom-square">
          <ColTable/>
          <Head />
          <Route
            to="host/admin/hours"
          component={() => <UserTable/>}/>
        </div>
      </main>
    );
  }
}

const CSVStyle = {
  color: "white",
  textDecoration: "none"
};

const mapStateToProps = state => ({
  users: state.LDReducer.filteredUsers
})

export default connect(mapStateToProps)(PeopleList)

PeopleList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id : PropTypes.string,
    name : PropTypes.string,
    topic : PropTypes.string,
    hours : PropTypes.string,
    date : PropTypes.string,
  })),
};