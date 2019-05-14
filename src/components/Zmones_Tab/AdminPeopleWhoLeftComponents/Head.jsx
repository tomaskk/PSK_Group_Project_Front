import React, { Component } from "react";
import { default as Reorder } from "./images/SvgReorder.jsx";
import TableSearch from "./images/TableSearch.jsx";

class Head extends Component {
  constructor(props) {
    super(props)

    this.state ={
      typedName : '',
    }

    this.onSortByLastActive = this.onSortByLastActive.bind(this)
    this.onSortByName = this.onSortByName.bind(this)
    this.onNameSearch = this.onNameSearch.bind(this)
  }

  // Events-------------------------------------

  onNameSearch(e){
    this.setState({typedName: e.target.value});
    this.props.onNameSearch(e.target.value)
  }
  
  onSortByName (e) {
    e.preventDefault();
    this.props.sortByName();
  }

  onSortByLastActive (e) {
    e.preventDefault();
    this.props.sortByLastActive();
  }

  // Render---------------------------------------

  render() {
    return (
      <div className="content__fixed">
        <table class="table">
    <thead>
      <th class="table__header-cell table__header-cell--long table__header-cell--first">
        <div class="table__header-content">
          <div class="table__column">
            <div class="table__label">
              <label for="name">
                Name
              </label>
              <a href="" class="table__header-action" onClick={this.onSortByName}>
              <Reorder/>
              </a>
            </div>
          </div>
          <div class="table__search-container">
            <input value = {this.state.typedName} onChange={this.onNameSearch} type="text" id="name" class="table__search" placeholder="Search..." />
            <TableSearch/>
          </div>
        </div>
      </th>
      <th class="table__header-cell table__header-cell--last table__header-cell--location">
        <div class="table__header-content">
          <div class="table__column">
            <div class="table__label">
              <label for="location">
                Last active day
              </label>
              <a href="" class="table__header-action" onClick={this.onSortByLastActive}>
              <Reorder/></a>
            </div>
          </div>
        </div>
      </th>
    </thead>
  </table>
      </div >
    );
  }
}

export default Head
