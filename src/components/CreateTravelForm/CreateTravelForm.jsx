import React from 'react';
import { Form, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

import DatePicker from '../common/DatePicker/DatePicker';

/** e.g.:
 * {
 *    "title": "Vilniaus DevBridge",
 *    "address": "Žalgirio g. 135, Vilnius 08217"
 *  },
 */
const officeData = require('./MockOfficeData.json');

const styles = {
  sectionTitle: {
    fontSize: '20px',
  },
};

const CreateTravelForm = props => {
  const { onExit, onCancel, onAccept } = props;

  return (
    <Form>
      <div>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Workation at Ibiza" />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Travel from</Form.Label>
          <Form.Control as="select">
            {officeData.map(office => (
              <option>{office.title}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Travel to</Form.Label>
          <Form.Control as="select">
            {officeData.map(office => (
              <option>{office.title}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Row>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>Start of travel</Form.Label>
              <DatePicker />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group>
              <Form.Label>End of travel</Form.Label>
              <DatePicker />
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
          <Form.Control type="text" placeholder="Sleepy Hollow inn" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Hotel address
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="3211 baker st." />
        </Col>
      </Form.Group>
      <Form.Group>
        <Form.Label>additional hotel info</Form.Label>
        <Form.Control
          as="textarea"
          rows="2"
          placeholder="e.g. check emails for bookings"
        />
      </Form.Group>

      <span style={styles.sectionTitle}>Transportation</span>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Travel type
        </Form.Label>
        <ButtonGroup toggle>
          {['by Car', 'by Plane', 'Car and Plane'].map(travelType => (
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
        <Form.Control as="textarea" rows="2" />
      </Form.Group>
    </Form>
  );
};

CreateTravelForm.propTypes = {
  onExit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
};

export default CreateTravelForm;
