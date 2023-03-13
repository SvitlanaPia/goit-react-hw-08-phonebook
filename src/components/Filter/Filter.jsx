import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ value, changeFilter }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={changeFilter}></Input>
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
