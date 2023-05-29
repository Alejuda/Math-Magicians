import PropTypes from 'prop-types';

const CalcNumber = ({ number }) => (
  <div className={`calc-number calc-${number}`}>{number}</div>
);

export default CalcNumber;

CalcNumber.propTypes = {
  number: PropTypes.number.isRequired,
};
