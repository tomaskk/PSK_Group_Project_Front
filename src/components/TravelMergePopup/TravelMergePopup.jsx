import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { travelShape } from "../../types/proptypes";
import Popup from "../common/Popup/index.js";
import { mergeTravels } from '../Menu_Management/Keliones_Tab/BackEndCalls'

import "../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";

const _ = require('lodash');

class TravelMergePopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toMerge: null,
      mergeInto: null
    };

    this.onMergeTravel = this.onMergeTravel.bind(this);
  }

  onToMergeChange(e) {
    this.setState({ toMerge: e.target.value });
  }

  onMergeIntoChange(e) {
    this.setState({ mergeInto: e.target.value });
  }

  onMergeTravel() {
    const { onTogglePopup, travels } = this.props;
    const { toMerge, mergeInto } = this.state;

    // const toMerge = _.find(travels, ['id', toMergeId]);
    // const mergeInto = _.find(travels, ['id', mergeIntoId]);

    console.log(this.state);
    mergeTravels(toMerge, mergeInto, (res) => {
      console.log(res);
      onTogglePopup();
    });
  }

  render() {
    const {
      popupTitle, showingPopup, onTogglePopup, travels
    } = this.props;

    return (
      <Popup
        title={popupTitle}
        onExit={onTogglePopup}
        onCancel={onTogglePopup}
        onAccept={this.onMergeTravel}
        isOpen={showingPopup}
      >
        <Form style={{ margin: 10 }}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              To Merge
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                onChange={e => this.onToMergeChange(e)}
              >
                {travels.map(travel => (
                  <option value={travel.id}>{travel.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Merge into
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="select"
                onChange={e => this.onMergeIntoChange(e)}
              >
                {travels.map(travel => (
                  <option value={travel.id}>{travel.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </Popup>
    );
  }
}

TravelMergePopup.propTypes = {
  onTogglePopup: PropTypes.func.isRequired,
  showingPopup: PropTypes.bool,
  popupTitle: PropTypes.string.isRequired,
  travels: PropTypes.arrayOf(travelShape).isRequired
};

export default TravelMergePopup;
