import PropTypes from 'prop-types';

export const employeeShape = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.any,
  profilePhoto: PropTypes.any,
  registeredOffice: PropTypes.any,
  available: PropTypes.bool,
  id: PropTypes.number,
  userName: PropTypes.string,
  normalizedUserName: PropTypes.string,
  email: PropTypes.string,
  normalizedEmail: PropTypes.string,
  emailConfirmed: PropTypes.bool,
  passwordHash: PropTypes.string,
  securityStamp: PropTypes.string,
  concurrencyStamp: PropTypes.string,
});

export const officeShape = PropTypes.shape({
  id: PropTypes.number,
  officeApartment: apartmentShape,
  title: PropTypes.string,
  address: PropTypes.string,
});

export const travelShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  travelTo: officeShape.isRequired,
  travelFrom: officeShape.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  hotels: PropTypes.any,
  transports: PropTypes.any,
  cost: PropTypes.number,
  organizedBy: employeeShape,
});

export const employeeTravelShape = PropTypes.shape({
  id: PropTypes.number,
  employee: employeeShape,
  travel: travelShape,
  confirm: PropTypes.bool,
});

export const apartmentShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  address: PropTypes.string,
  fitsPeople: PropTypes.number,
  employeeTravels: PropTypes.arrayOf(employeeTravelShape),
});
