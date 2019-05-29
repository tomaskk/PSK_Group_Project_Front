import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import { travelShape } from "../../types/proptypes";
import Popup from "../common/Popup/index.js";
import { mergeTravels } from '../Menu_Management/Keliones_Tab/BackEndCalls'

import "../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss";

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
    console.log(e);

    console.log(this.state);
  }

  onMergeIntoChange(e) {
    this.setState({ mergeInto: e.target.value });
  }

  onMergeTravel() {
    const { onTogglePopup } = this.props;
    const { toMerge, mergeInto } = this.state;
    console.log(this.state);
    mergeTravels(toMerge.id, mergeInto.id, (res) => {
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
                value={this.state.toMerge && this.state.toMerge.title}
              >
                {travels.map(travel => (
                  <option value={travel}>{travel.name}</option>
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
                value={this.state.mergeInto && this.state.mergeInto.title}
              >
                {travels.map(travel => (
                  <option value={travel}>{travel.name}</option>
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
