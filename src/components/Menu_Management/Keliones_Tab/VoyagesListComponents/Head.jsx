/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Reorder from './images/SvgReorder.jsx';
import TableSearch from './images/TableSearch.jsx';

class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedName: '',
    };

    this.onSortByLastActive = this.onSortByLastActive.bind(this);
    this.onSortByName = this.onSortByName.bind(this);
    this.onNameSearch = this.onNameSearch.bind(this);
  }

  // Events-------------------------------------

  onNameSearch(e) {
    this.setState({ typedName: e.target.value });
    this.props.onNameSearch(e.target.value);
  }

  onSortByName(e) {
    e.preventDefault();
    this.props.sortByName();
  }

  onSortByLastActive(e) {
    e.preventDefault();
    this.props.sortByLastActive();
  }

  // Render---------------------------------------

  render() {
    return (
      <div className="content__fixed">
        <table className="table">
          <thead>
            <th className="table__header-cell table__header-cell--long table__header-cell--first">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="name">Name</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={this.onSortByName}
                    >
                      <Reorder />
                    </a>
                  </div>
                </div>
                <div className="table__search-container">
                  <input
                    value={this.state.typedName}
                    onChange={this.onNameSearch}
                    type="text"
                    id="name"
                    className="table__search"
                    placeholder="Search..."
                  />
                  <TableSearch />
                </div>
              </div>
            </th>
            <th className="table__header-cell table__header-cell--last table__header-cell--location">
              <div className="table__header-content">
                <div className="table__column">
                  <div className="table__label">
                    <label htmlFor="location">Last active day</label>
                    <a
                      href=""
                      className="table__header-action"
                      onClick={this.onSortByLastActive}
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

export default Head;
