import { StyledTextField, Wrapper } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Wrapper>
      <StyledTextField
        size="small"
        id="outlined-filter"
        label="Find a contact 🔍"
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </Wrapper>
  );
}
