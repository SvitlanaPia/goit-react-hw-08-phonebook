import PropTypes from 'prop-types';

export const Filter = ({ value, changeFilter }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={changeFilter}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
