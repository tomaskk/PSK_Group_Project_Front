import React from 'react';
import { Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { travelShape } from '../../types/proptypes';
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

    const { travelData } = this.props;
    if (travelData) {
      this.state = {
        name: travelData.name,
        travelFrom: travelData.travelFrom,
        travelTo: travelData.travelTo,
        travelStart: moment(travelData.startTime).toDate(),
        travelEnd: moment(travelData.endTime).toDate(),
        // FIXME: hotel name preset
        hotelName: 'undefined logic',
        hotelAddress: 'undefined logic',
        hotelInfo: 'undefined logic',
        travelType: 'undefined logic',
        travelDescription: 'undefined logic',
      };
    } else {
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
    console.log(this.state);
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
    const { popupTitle, showingPopup, onTogglePopup, readOnly } = this.props;

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
                  readOnly={readOnly}
                  value={this.state.name}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label>Travel from</Form.Label>
              {readOnly ? (
                <Form.Control
                  type="text"
                  readOnly
                  value={this.state.travelFrom.title}
                />
              ) : (
                <Form.Control
                  as="select"
                  onChange={e => this.onTravelFromChange(e)}
                  value={this.state.travelFrom.title}
                >
                  {officeData.map(office => (
                    <option>{office.title}</option>
                  ))}
                </Form.Control>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Travel to</Form.Label>
              {readOnly ? (
                <Form.Control
                  type="text"
                  value={this.state.travelTo.title}
                  readOnly
                />
              ) : (
                <Form.Control
                  as="select"
                  onChange={e => this.onTravelToChange(e)}
                  value={this.state.travelTo.title}
                >
                  {officeData.map(office => (
                    <option>{office.title}</option>
                  ))}
                </Form.Control>
              )}
            </Form.Group>

            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Start of travel</Form.Label>
                  <DatePicker
                    selected={this.state.travelStart}
                    onChange={e => this.onTravelStartChange(e)}
                    readOnly={readOnly}
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>End of travel</Form.Label>
                  <DatePicker
                    selected={this.state.travelEnd}
                    onChange={e => this.onTravelEndChange(e)}
                    readOnly={readOnly}
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
                value={this.state.hotels ? this.state.hotels[0].title : ''}
                readOnly={readOnly}
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
                onChange={e => this.onHotelAdressChange(e)}
                value={this.state.hotels ? this.state.hotels[0].address : ''}
                readOnly={readOnly}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>additional hotel info</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              value={this.state.hotels ? this.state.hotels[0].description : ''}
              placeholder={!readOnly && 'e.g.+ check emails for bookings'}
              onChange={e => this.onHotelInfoChange(e)}
              readOnly={readOnly}
            />
          </Form.Group>

          <span style={styles.sectionTitle}>Transportation</span>
          <Form.Group as={Row}>
            <Form.Label column sm={4}>
              Travel type
            </Form.Label>
            {readOnly ? (
              <Form.Control
                style={{
                  marginRight: 16,
                  marginLeft: 16,
                }}
                column
                sm={8}
                type="text"
                value={this.state.travelType}
                readOnly={readOnly}
              />
            ) : (
              <ButtonGroup
                column
                sm={8}
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
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>transportation info</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              onChange={e => this.onTravelDescriptionChange(e)}
              readOnly={readOnly}
              value={
                this.state.transport && this.state.transport[0].description
              }
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
  travelData: travelShape,
};

export default TravelCreationPopup;
