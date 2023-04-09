import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <h1 style={{ textAlign: 'center', paddingTop: 30, marginBottom: 30 }}>
        Phonebook
      </h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
