import React from 'react';
import { CSVLink } from 'react-csv';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ColTable from './PeopleListComponents/ColTable.jsx';
import UserTable from './PeopleListComponents/UserTable.jsx';
import SvgDownload from '../../common/images/SvgDownload.jsx';
import Head from './PeopleListComponents/Head.jsx';

import { loadDataFromAPI } from './PeopleListComponents/actions/LDActions.js';

class PeopleList extends React.Component {

	constructor(props) {
		super(props);
		loadDataFromAPI();
	}

  componentWillMount() {
    //loadDataFromAPI();
    //this.props.loadDataFromAPI;
    //this.props.dispatch(loadDataFromAPI());
    //console.log(this.props.users);
	}

  render() {
    return (
      <main className="main">
        <div className="admin__header">
          <h1 className="heading1" style={{ float: 'left' }}>
            Management
          </h1>
          <a
            href=""
            className="button button--primary button--spaced admin__action"
          >
            <CSVLink
              style={CSVStyle}
              data={this.props.users}
              filename="AllUsers.csv"
            >
              <SvgDownload />
              Download as CSV
            </CSVLink>
          </a>
        </div>
        <div className="content content--bottom-square">
          <ColTable />
          <Head />
          <Route to="host/manage/users" component={() => <UserTable />} />
        </div>
      </main>
    );
  }
}

const CSVStyle = {
  color: 'white',
  textDecoration: 'none',
};

const mapStateToProps = state => ({
  users: state.LDReducer.filteredUsers,
});

export default connect(mapStateToProps)(PeopleList);

PeopleList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      topic: PropTypes.string,
      hours: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
