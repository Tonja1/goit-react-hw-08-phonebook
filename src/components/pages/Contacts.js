import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from 'components/ContactForm/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Div } from 'components/App/AppStyled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { Outlet } from 'react-router-dom';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <Outlet />
        <Div>
          <h1>Phonebook</h1>
          <ContactForm />
        </Div>
        <Div>
          <h1>Contacts</h1>
          <Filter />
          <ContactList />
        </Div>
      </Container>
    </HelmetProvider>
  );
}

export default Contacts;