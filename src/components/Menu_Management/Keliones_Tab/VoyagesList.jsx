/* eslint-disable react/sort-comp */

import React from 'react';
import { CSVLink } from 'react-csv';
import { Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import ColTable from './VoyagesListComponents/ColTable.jsx';
import UserTable from './VoyagesListComponents/UserTable.jsx';
import SvgDownload from './VoyagesListComponents/images/SvgDownload.jsx';
import Head from './VoyagesListComponents/Head.jsx';
import Popup from '../../common/Popup.jsx';

// Provides users - false error
// eslint-disable-next-line no-unused-vars
import storage from './VoyagesListComponents/LocalStorage.js';

const ButtonTextStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 700,
};

const styles = {
  CSVButton: ButtonTextStyle,
  organizeTravelButton: {
    // Matches CSVLink button
    ...ButtonTextStyle,
    marginTop: -12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 22,
    paddingLeft: 22,
    backgroundColor: 'green',
    borderRadius: 5,
    border: 0,
  },
};

export default class VoyagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      nameOrder: 'asc',
      lastActiveOrder: 'asc',
      orderBy: '',
      searchString: '',
      classes: props.classes,
      typed: '',
      data: [],

      showingPopup: false,
    };

    this.tableElement = React.createRef();
    this.getSorting.bind(this);
    this.stableSort.bind(this);
    this.desc.bind(this);
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

  // Sorting functions--------------------------
  // TODO: move them out of render component
  getSorting(order, orderBy) {
    return order === 'desc'
      ? (a, b) => this.desc(a, b, orderBy)
      : (a, b) => -this.desc(a, b, orderBy);
  }

  desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  sortList(order, orderBy) {
    const { users: prevUsers } = this.state;

    const newUsers = this.stableSort(
      prevUsers,
      this.getSorting(order, orderBy)
    );
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
              style={styles.CSVButton}
              data={this.state.users}
              filename="AllVoyages.csv"
            >
              <SvgDownload />
              Download as CSV
            </CSVLink>
          </a>
          <Button
            variant="success"
            style={styles.organizeTravelButton}
            onClick={this.togglePopup}
          >
            Add voyage
          </Button>
          <Popup
            togglePopup={this.togglePopup}
            isOpen={this.state.showingPopup}
          />
        </div>
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
              <UserTable
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
