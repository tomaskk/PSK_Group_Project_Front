import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class DatePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      date: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
    });
  }

  render() {
    return (
      <DatePicker selected={this.state.date} onChange={this.handleChange} />
    );
  }
}
