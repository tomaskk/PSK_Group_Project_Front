import React, { Component } from "react";
import { Link } from "react-router-dom";
import SvgSearch from "./TopHeaderComponents/SvgSearch.jsx";
import SvgBell from "./TopHeaderComponents/SvgBell.jsx";
import SvgCaretDown from "./TopHeaderComponents/SvgCaretDown.jsx";
import { connect } from "react-redux";

class TopHeader extends Component {
  render() {
    return (
      <div className="container__header">
        <header className="header">
          <div className="searchbar">
            <SvgSearch />
            <input
              type="text"
              className="searchbar__input"
              placeholder="Search by a keyword..."
            />
          </div>
          <div className="header__nav">
            <a href="" className="header__notification-nav">
              <SvgBell />
              <div className="header__notification-count">2</div>
            </a>
            <a href="" className="header__profile-nav">
            <Link to="/" className="nav-link">
              <img
                src={this.props.selfProfileReducer.photo}
                height="32"
                width="32"
                className="photo header__profile-photo"
              />
              </Link>
              <div className="header__profile-name">{this.props.selfProfileReducer.name} {this.props.selfProfileReducer.surname}</div>
              <SvgCaretDown />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selfProfileReducer: state.selfProfileReducer
  }
};

export default connect(mapStateToProps, null)(TopHeader);