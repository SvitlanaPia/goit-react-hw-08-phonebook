import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { GrContactInfo } from 'react-icons/gr';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  Text,
  Spinner,
  ContactListContainer,
  ContactListItem,
  StyledContactInfoIcon,
  StyledDiv,
} from './ContactList.styled';
import { Button, List } from '@mui/material';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledDiv>
      {isLoading && <Spinner />}
      {!filteredContacts?.length && !error && !isLoading && (
        <Text>No contacts found.</Text>
      )}
      {error && <Text>{error}</Text>}
      <ContactListContainer>
        <List aria-label="Contacts list">
          {filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <StyledContactInfoIcon size={20} />
              <Text>
                {name}: {number}
              </Text>
              <Button
                variant="contained"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </Button>
            </ContactListItem>
          ))}
        </List>
      </ContactListContainer>
    </StyledDiv>
  );
}
