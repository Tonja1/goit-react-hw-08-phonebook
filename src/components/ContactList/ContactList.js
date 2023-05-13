import { Div, List } from "./ContactListStyled";
import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem/ContactItem";
import { selectContacts, selectContactsFilter } from "redux/selectors";


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === "") {
      return contacts;
    }
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Div>
      <List>
        {visibilityContacts && 
          visibilityContacts.map(({ name, phone, id }) => (
            <ContactItem key={id} name={name} phone={phone} id={id} />
        ))}
      </List>
    </Div>
  );
};