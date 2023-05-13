import { ToastContainer } from "react-toastify";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/Form";
import { Div, Container, Title } from "./AppStyled";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Div>
        <Title>Phonebook</Title>
        <ContactForm />
      </Div>
      <Div>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Div>
      <ToastContainer
        font-size="15px"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};
