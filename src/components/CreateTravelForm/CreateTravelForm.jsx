import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import DatePicker from '../common/DatePicker/DatePicker';

/** e.g.:
 * {
 *    "title": "Vilniaus DevBridge",
 *    "address": "Žalgirio g. 135, Vilnius 08217"
 *  },
 */
const officeData = require('./MockOfficeData.json');

const CreateTravelForm = props => {
  const { onExit, onCancel, onAccept } = props;

  return (
    <Form>
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
    </Form>
  );
};

CreateTravelForm.propTypes = {
  onExit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
};

export default CreateTravelForm;
