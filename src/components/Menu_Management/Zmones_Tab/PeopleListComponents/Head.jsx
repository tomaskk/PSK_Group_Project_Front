import React, { Component } from 'react';
import { default as Reorder } from './images/SvgReorder.jsx';
import TableSearch from './images/TableSearch.jsx';
import SvgCaretLines from './images/SvgCaretLines.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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
    this.props.storeFilter('name', typedName);
    this.props.storeFilter('topic', typedTopic);
    if (typedName.length > 0) {
      newUsers = newUsers.filter(i => i.name.toLowerCase().match(typedName));
    }
    if (typedTopic.length > 0) {
      newUsers = newUsers.filter(i => i.surname.toLowerCase().match(typedTopic));
    }
    this.props.filterData(newUsers);
  }

  onSort(e, orderBy) {
    if (e !== null) e.preventDefault();
    if (orderBy == 'name') var order = !this.props.nameDirection;
    if (orderBy == 'topic') var order = !this.props.topicDirection;
    if (orderBy == 'hours') var order = !this.props.hoursDirection;
    if (orderBy == 'date') var order = !this.props.dateDirection;
    if (orderBy == '') return;
    let newUsers = this.stableSort(
      this.props.filteredUsers,
      this.getSorting(order, orderBy)
    );
    let sortedUsers = this.stableSort(
      this.props.sortedUsers,
      this.getSorting(order, orderBy)
    );
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
                        this.onSort(e, 'name');
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
                        this.onSort(e, 'topic');
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
                        this.onSort(e, 'date');
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
                    <label for="location">Find more</label>
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
  topicDirection: state.LDReducer.topicDirection,
  dateDirection: state.LDReducer.dateDirection,
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
      topic: PropTypes.string,
      hours: PropTypes.string,
      date: PropTypes.string
    })
  ),
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  sortData: PropTypes.func,
  filterData: PropTypes.func,
  storeFilter: PropTypes.func,
  checkSort: PropTypes.func
};
