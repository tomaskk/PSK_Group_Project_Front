/* eslint-disable react/sort-comp */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSVLink } from 'react-csv';
import { Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import ColTable from './VoyagesListComponents/ColTable.jsx';
import VoyageTable from './VoyagesListComponents/VoyageTable.jsx';
import SvgDownload from '../../common/images/SvgDownload';
import Head from './VoyagesListComponents/Head.jsx';
import TravelCreationPopup from '../../TravelCreationPopup/TravelCreationPopup';
import TravelMergePopup from '../../TravelMergePopup'

// Misc
import {
  loadTravelsFromAPI
} from '../Zmones_Tab/PeopleListComponents/actions/LDActions';
import { travelShape } from '../../../types/proptypes';
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

class VoyagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      travels: [],
      nameOrder: 'asc',
      lastActiveOrder: 'asc',
      data: [],

      showingPopup: false,
      showingMergePopup: false,
    };

    this.tableElement = React.createRef();

    this.sortByLastActive = this.sortByLastActive.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.onNameSearch = this.onNameSearch.bind(this);
    this.sortList = this.sortList.bind(this);

    this.togglePopup = this.togglePopup.bind(this);
    this.toggleMergePopup = this.toggleMergePopup.bind(this);

    this.props.dispatch(loadTravelsFromAPI());
  }

  togglePopup() {
    this.setState(prevState => ({
      showingPopup: !prevState.showingPopup,
    }));
  }

  toggleMergePopup() {
    this.setState(prevState => ({
      showingMergePopup: !prevState.showingMergePopup,
    }));
  }

  sortList(order, orderBy) {
    const { travels: prevUsers } = this.state;

    const newTravels = stableSort(prevUsers, getSorting(order, orderBy));
    this.setState({ travels: newTravels });
    this.tableElement.current.changeUsers(newTravels);
  }

  // Events-------------------------------------

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
    this.setState({ travels: libraries });
    this.tableElement.current.changeUsers(libraries);
  }

  render() {
    const createButtonText = 'Create Travel';
    const mergeButtonText = "Merge Travels";

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
                data={this.state.travels}
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
            <Button
              style={styles.createTravelButton}
              onClick={this.toggleMergePopup}
            >
              {mergeButtonText}
            </Button>
            <TravelCreationPopup
              popupTitle={createButtonText}
              showingPopup={this.state.showingPopup}
              onTogglePopup={this.togglePopup}
              currentUser={ this.props.currentUser }
            />
            <TravelMergePopup
              popupTitle={mergeButtonText}
              showingPopup={this.state.showingMergePopup}
              onTogglePopup={this.toggleMergePopup}
              travels={this.props.travels}
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
                travels={this.props.travels}
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

const mapStateToProps = state => ({
  travels: state.LDReducer.travelsList,
});

export default connect(
  mapStateToProps
)(VoyagesList);

VoyagesList.propTypes = {
  travels: PropTypes.arrayOf(travelShape).isRequired,
};
