import { ContactForm } from './ContactsForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Layout, Subtitle, Title } from './Layout';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </Layout>
  );
};
