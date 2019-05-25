/* eslint-disable jsx-a11y/anchor-has-content */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Reorder from '../../../../common/images/SvgReorder.jsx';
import TableSearch from '../../../../common/images/TableSearch.jsx';
import SvgCaretLines from '../../../../common/images/SvgCaretLines.jsx';

import * as actions from './actions/LDActions';
import { getSorting, stableSort } from '../../../../../helpers/Sorting';

class Head extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.topicInput = React.createRef();
  }

  componentDidMount() {
    this.nameInput.current.value = this.props.typedName;
    this.topicInput.current.value = this.props.typedTopic;
  }

  // Events-------------------------------------

  onSearch() {
    let newUsers = this.props.sortedUsers;
    const typedName = this.nameInput.current.value.toLowerCase();
    const typedTopic = this.topicInput.current.value.toLowerCase();
    this.props.storeFilter('name', typedName);
    this.props.storeFilter('surname', typedTopic);
    if (typedName.length > 0) {
      newUsers = newUsers.filter(i => i.name.toLowerCase().match(typedName));
    }
    if (typedTopic.length > 0) {
      newUsers = newUsers.filter(i =>
        i.surname.toLowerCase().match(typedTopic)
      );
    }
    this.props.filterData(newUsers);
  }

  onSort(e, orderBy) {
    if (e !== null) e.preventDefault();
    // sets parameters
    let order;
    if (orderBy === 'name') order = !this.props.nameDirection;
    else if (orderBy === 'surname') order = !this.props.surnameDirection;
    else if (orderBy === 'hours') order = !this.props.hoursDirection;
    else if (orderBy === 'activity') order = !this.props.activityDirection;
    else if (orderBy == '') return;

    // updates sort locally
    const newUsers = stableSort(
      this.props.filteredUsers,
      getSorting(order, orderBy)
    );
    // does the same
    const sortedUsers = stableSort(
      this.props.sortedUsers,
      getSorting(order, orderBy)
    );

    // only updates info in store
    this.props.sortData(orderBy, newUsers, sortedUsers);
  }

  render() {
    return (
      <div className="content__fixed">
        <table className="table">
          <thead>
            <th className="table__header-cell table__header-cell--first">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="name">Name</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'name');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                </div>
                <div className="table__search-container">
                  <input
                    ref={this.nameInput}
                    onChange={this.onSearch.bind(this)}
                    type="text"
                    id="name"
                    className="table__search"
                    placeholder="Search..."
                  />
                  <TableSearch />
                </div>
              </div>
            </th>
            <th className="table__header-cell table__header-cell--main table__header-main">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="goal">Destination</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'surname');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                  <SvgCaretLines />
                </div>
                <div className="table__search-container">
                  <input
                    ref={this.topicInput}
                    onChange={this.onSearch.bind(this)}
                    type="text"
                    id="goal"
                    className="table__search"
                    placeholder="Search..."
                  />
                  <TableSearch />
                </div>
              </div>
            </th>
            <th className="table__header-cell table__header-cell--tiny">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="specialist">Status</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'activity');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                </div>
              </div>
            </th>
            <th className="table__header-cell table__header-cell--tiny table__header-cell--last">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="location">Actions</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'hours');
                      }}
                    />
                  </div>
                </div>
              </div>
            </th>
          </thead>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortedUsers: state.LDReducer.sortedUsers,
  filteredUsers: state.LDReducer.filteredUsers,
  nameDirection: state.LDReducer.nameDirection,
  surnameDirection: state.LDReducer.surnameDirection,
  activityDirection: state.LDReducer.activityDirection,
  hoursDirection: state.LDReducer.hoursDirection,
  typedName: state.LDReducer.typedName,
  typedTopic: state.LDReducer.typedTopic,
  currentSort: state.LDReducer.currentSort,
});

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        filterData: actions.filterData,
        sortData: actions.sortData,
        storeFilter: actions.storeFilter,
      },
      dispatch
    )
)(Head);

Head.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      surname: PropTypes.string,
      hours: PropTypes.string,
      activity: PropTypes.string,
    })
  ),
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  sortData: PropTypes.func,
  filterData: PropTypes.func,
  storeFilter: PropTypes.func,
};
