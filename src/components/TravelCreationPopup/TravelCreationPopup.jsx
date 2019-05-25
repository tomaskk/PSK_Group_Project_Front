import React from 'react';
import { Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import Popup from '../common/Popup/index.js';

import '../../../node_modules/react-datepicker/src/stylesheets/datepicker.scss';
/** e.g.:
 * {
 *    "title": "Vilniaus DevBridge",
 *    "address": "Žalgirio g. 135, Vilnius 08217"
 *  },
 */
const officeData = require('./MockOfficeData.json');

const travelTypes = ['by Car', 'by Plane', 'Car and Plane'];

const styles = {
  sectionTitle: {
    fontSize: '20px',
  },
};

class TravelCreationPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      travelFrom: officeData[0],
      travelTo: officeData[0],
      travelStart: new Date(),
      travelEnd: new Date(),
      hotelName: '',
      hotelAddress: '',
      hotelInfo: '',
      travelType: travelTypes[0],
      travelDescription: '',
    };
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onTravelFromChange(e) {
    this.setState({ travelFrom: e.target.value });
  }

  onTravelToChange(e) {
    this.setState({ travelTo: e.target.value });
  }

  onTravelStartChange(e) {
    this.setState({ travelStart: e });
  }

  onTravelEndChange(e) {
    this.setState({ travelEnd: e });
  }

  onHotelAdressChange(e) {
    this.setState({ hotelAddress: e.target.value });
  }

  onHotelNameChange(e) {
    this.setState({ hotelName: e.target.value });
  }

  onHotelInfoChange(e) {
    this.setState({ hotelInfo: e.target.value });
  }

  onTravelTypeChange(e) {
    this.setState({ travelType: e.target.value });
  }

  onTravelDescriptionChange(e) {
    this.setState({ travelDescription: e.target.value });
    console.log(this.state);
  }

  render() {
    const { popupTitle, showingPopup, onTogglePopup, editable } = this.props;

    return (
      <Popup
        title={popupTitle}
        onExit={onTogglePopup}
        onCancel={onTogglePopup}
        onAccept={onTogglePopup}
        isOpen={showingPopup}
      >
        <Form>
          <div>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Workation at Ibiza"
                  onChange={e => this.onNameChange(e)}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label>Travel from</Form.Label>
              <Form.Control
                as="select"
                onChange={e => this.onTravelFromChange(e)}
              >
                {officeData.map(office => (
                  <option>{office.title}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Travel to</Form.Label>
              <Form.Control
                as="select"
                onChange={e => this.onTravelToChange(e)}
              >
                {officeData.map(office => (
                  <option>{office.title}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Start of travel</Form.Label>
                  <DatePicker
                    selected={this.state.travelStart}
                    onChange={e => this.onTravelStartChange(e)}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>End of travel</Form.Label>
                  <DatePicker
                    selected={this.state.travelEnd}
                    onChange={e => this.onTravelEndChange(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <span style={styles.sectionTitle}>Additional accomodation</span>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Hotel name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                onChange={e => this.onHotelNameChange(e)}
                type="text"
                placeholder="Sleepy Hollow inn"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Hotel address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="3211 baker st."
                onChange={e => this.onHotelAdressChange(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>additional hotel info</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              placeholder="e.g. check emails for bookings"
              onChange={e => this.onHotelInfoChange(e)}
            />
          </Form.Group>

          <span style={styles.sectionTitle}>Transportation</span>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Travel type
            </Form.Label>
            <ButtonGroup
              toggle
              onChange={e => this.onTravelTypeChange(e)}
              defaultValue={this.state.travelType}
            >
              {travelTypes.map(travelType => (
                <ToggleButton
                  style={{ marginRight: 8 }}
                  type="radio"
                  name="radio"
                  value={travelType}
                >
                  {travelType}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>transportation info</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              onChange={e => this.onTravelDescriptionChange(e)}
            />
          </Form.Group>
        </Form>
      </Popup>
    );
  }
}

TravelCreationPopup.propTypes = {
  onTogglePopup: PropTypes.func.isRequired,
  showingPopup: PropTypes.bool,
  readOnly: PropTypes.bool,
  popupTitle: PropTypes.string,
};

export default TravelCreationPopup;
