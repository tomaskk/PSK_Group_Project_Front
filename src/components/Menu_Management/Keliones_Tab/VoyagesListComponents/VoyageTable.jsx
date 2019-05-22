import React, { Component } from 'react';
import VoyageRow from './VoyageRow.jsx';

class VoyageTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick(id) {
    this.props.onDeleteClick(id);
  }

  changeUsers(newUsers) {
    this.setState({
      users: newUsers
    });
  }

  render() {
    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {this.state.users.map((user, index) => (
              <VoyageRow
                onDeleteClick={this.onDeleteClick}
                key={index}
                name={user.name}
                lastActive={user.lastActive}
                id={user.id}
                pic={user.pic}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VoyageTable;