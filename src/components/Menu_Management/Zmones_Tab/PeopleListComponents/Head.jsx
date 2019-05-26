import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Reorder from '../../../common/images/SvgReorder.jsx';
import TableSearch from '../../../common/images/TableSearch.jsx';
import SvgCaretLines from '../../../common/images/SvgCaretLines.jsx';

import * as actions from './actions/LDActions';

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

  // Sorting Functions--------------------------

  desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  getSorting(order, orderBy) {
    return order === false
      ? (a, b) => this.desc(a, b, orderBy)
      : (a, b) => -this.desc(a, b, orderBy);
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

  // Events-------------------------------------

  onSearch() {
    let newUsers = this.props.sortedUsers;
    const typedName = this.nameInput.current.value.toLowerCase();
    const typedTopic = this.topicInput.current.value.toLowerCase();
    this.props.storeFilter('firstName', typedName);
    this.props.storeFilter('lastName', typedTopic);
    if (typedName.length > 0) {
      newUsers = newUsers.filter(i => i.firstName.toLowerCase().match(typedName));
    }
    if (typedTopic.length > 0) {
      newUsers = newUsers.filter(i => i.lastName.toLowerCase().match(typedTopic));
    }
    this.props.filterData(newUsers);
  }

  onSort(e, orderBy) {
    if (e !== null) e.preventDefault();
    //sets parameters
    if (orderBy == 'firstName') var order = !this.props.nameDirection;
    if (orderBy == 'lastName') var order = !this.props.surnameDirection;
    if (orderBy == 'available') var order = !this.props.activityDirection;
    if (orderBy == '') return;

    //updates sort locally
    let newUsers = this.stableSort(
      this.props.filteredUsers,
      this.getSorting(order, orderBy)
    );
    //does the same
    let sortedUsers = this.stableSort(
      this.props.sortedUsers,
      this.getSorting(order, orderBy)
    );

    // only updates info in store
    this.props.sortData(orderBy, newUsers, sortedUsers);
  }

  render() {
    return (
      <div class="content__fixed">
        <table class="table">
          <thead>
            <th class="table__header-cell table__header-cell--first">
              <div class="table__header-content">
                <div class="table__column">
                  <div class="table__label">
                    <label for="name">Name</label>
                    <a
                      href=""
                      class="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'firstName');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                </div>
                <div class="table__search-container">
                  <input
                    ref={this.nameInput}
                    onChange={this.onSearch.bind(this)}
                    type="text"
                    id="name"
                    class="table__search"
                    placeholder="Search..."
                  />
                  <TableSearch />
                </div>
              </div>
            </th>
            <th class="table__header-cell table__header-cell--main table__header-main">
              <div class="table__header-content">
                <div class="table__column">
                  <div class="table__label">
                    <label for="goal">Surname</label>
                    <a
                      href=""
                      class="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'lastName');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                  <SvgCaretLines />
                </div>
                <div class="table__search-container">
                  <input
                    ref={this.topicInput}
                    onChange={this.onSearch.bind(this)}
                    type="text"
                    id="goal"
                    class="table__search"
                    placeholder="Search..."
                  />
                  <TableSearch />
                </div>
              </div>
            </th>
            <th class="table__header-cell table__header-cell--tiny">
              <div class="table__header-content">
                <div class="table__column">
                  <div class="table__label">
                    <label for="specialist">Status</label>
                    <a
                      href=""
                      class="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'available');
                      }}
                    >
                      <Reorder />
                    </a>
                  </div>
                </div>
              </div>
            </th>
            <th class="table__header-cell table__header-cell--tiny table__header-cell--last">
              <div class="table__header-content">
                <div class="table__column">
                  <div class="table__label">
                    <label for="location">Actions</label>
                    <a
                      href=""
                      class="table__header-action"
                      onClick={e => {
                        this.onSort(e, 'hours');
                      }}
                    >
                    </a>
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
  currentSort: state.LDReducer.currentSort
});

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        filterData: actions.filterData,
        sortData: actions.sortData,
        storeFilter: actions.storeFilter
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
      activity: PropTypes.string
    })
  ),
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  sortData: PropTypes.func,
  filterData: PropTypes.func,
  storeFilter: PropTypes.func,
  checkSort: PropTypes.func
};
