import PropTypes from 'prop-types';
import { Button, Item, List, Text } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contact: PropTypes.object,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
