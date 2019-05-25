/* eslint-disable react/sort-comp */

import React from 'react';
import { CSVLink } from 'react-csv';
import { Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import ColTable from './VoyagesListComponents/ColTable.jsx';
import VoyageTable from './VoyagesListComponents/VoyageTable.jsx';
import SvgDownload from '../../common/images/SvgDownload';
import Head from './VoyagesListComponents/Head.jsx';
import TravelCreationPopup from '../../TravelCreationPopup/TravelCreationPopup';

// Provides users - false error
// eslint-disable-next-line no-unused-vars
import storage from './VoyagesListComponents/LocalStorage.js';
import { getSorting, stableSort } from '../../../helpers/Sorting';

const ButtonTextStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 700,
  marginLeft: 16,
};

const styles = {
  CSVButton: ButtonTextStyle,
  createTravelButton: ButtonTextStyle,

  buttonRow: {
    textAlign: 'right',
  },
};

export default class VoyagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      nameOrder: 'asc',
      lastActiveOrder: 'asc',
      data: [],

      showingPopup: false,
    };

    this.tableElement = React.createRef();
    this.sortByLastActive = this.sortByLastActive.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.onNameSearch = this.onNameSearch.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.sortList = this.sortList.bind(this);

    this.togglePopup = this.togglePopup.bind(this);
  }

  componentWillMount() {
    this.state.users = [
      // eslint-disable-next-line no-undef
      ...JSON.parse(window.localStorage.getItem('usersWhoLeftData')).users,
    ];
    this.state.data = [
      // eslint-disable-next-line no-undef
      ...JSON.parse(window.localStorage.getItem('usersWhoLeftData')).users,
    ];
  }

  togglePopup() {
    this.setState(prevState => ({
      showingPopup: !prevState.showingPopup,
    }));
  }

  sortList(order, orderBy) {
    const { users: prevUsers } = this.state;

    const newUsers = stableSort(prevUsers, getSorting(order, orderBy));
    this.setState({ users: newUsers });
    this.tableElement.current.changeUsers(newUsers);
  }

  // Events-------------------------------------

  onDeleteUser(id) {
    const { users: prevUsers } = this.state;

    let newUsers = Array.from(prevUsers);
    const ind = newUsers.findIndex(i => i.id === id);
    newUsers.splice(ind, 1);

    if (newUsers === null) newUsers = [];
    this.setState({ users: newUsers, data: newUsers });
    this.tableElement.current.changeUsers(newUsers);
  }

  sortByName() {
    let order = 'desc';
    if (this.state.nameOrder === 'desc') {
      order = 'asc';
    }
    this.setState({ nameOrder: order });
    this.sortList(order, 'name');
  }

  sortByLastActive() {
    let order = 'desc';
    if (this.state.lastActiveOrder === 'desc') {
      order = 'asc';
    }
    this.setState({ lastActiveOrder: order });
    this.sortList(order, 'lastActive');
  }

  onNameSearch(typed) {
    const { data } = this.state;

    let libraries = Array.from(data);
    const searchString = typed.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function(i) {
        return i.name.toLowerCase().match(searchString);
      });
    }
    this.setState({ users: libraries });
    this.tableElement.current.changeUsers(libraries);
  }

  render() {
    const createButtonText = 'Create Travel';

    return (
      <main className="main">
        <Row>
          <Col xs={4}>
            <h1 className="heading1" style={{ float: 'left' }}>
              Management
            </h1>
          </Col>
          <Col xs={8} style={styles.buttonRow}>
            <a href="" className="button--primary admin__action">
              <CSVLink
                style={{ ...styles.CSVButton, marginLeft: 0 }}
                data={this.state.users}
                filename="AllVoyages.csv"
              >
                <SvgDownload />
                Download as CSV
              </CSVLink>
            </a>
            <Button
              variant="success" // Green button style
              style={styles.createTravelButton}
              onClick={this.togglePopup}
            >
              {createButtonText}
            </Button>
            <TravelCreationPopup
              popupTitle={createButtonText}
              showingPopup={this.state.showingPopup}
              onTogglePopup={this.togglePopup}
            />
          </Col>
        </Row>
        <div className="content content--bottom-square">
          <ColTable />
          <Head
            sortByName={this.sortByName}
            sortByLastActive={this.sortByLastActive}
            onNameSearch={this.onNameSearch}
          />
          <Route
            to="host/admin/lost"
            component={() => (
              <VoyageTable
                users={this.state.users}
                ref={this.tableElement}
                onDeleteClick={this.onDeleteUser}
              />
            )}
          />
        </div>
      </main>
    );
  }
}
