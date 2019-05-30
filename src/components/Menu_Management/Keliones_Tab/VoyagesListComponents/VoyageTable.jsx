import React, { Component } from 'react';
import VoyageRow from './VoyageRow.jsx';

class VoyageTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travels: props.travels
    };
  }

  render() {
    return (
      <div className="content__scrollable">
        <table className="table">
          <tbody>
            {this.state.travels.map(travel => (
              <VoyageRow
                key={travel.id}
                name={travel.name}
                startsOn={travel.startTime}
                id={travel.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default VoyageTable;
