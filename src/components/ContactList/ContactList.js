import { Div, List } from "./ContactListStyled";
import { ContactItem } from "components/ContactItem/ContactItem";
import { useContacts } from "hooks/useContacts";

export const ContactList = () => {
  
  const { selectedContacts } = useContacts();
  const { contactFilter } = useContacts();
  const filterValue = contactFilter.toLowerCase();

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return selectedContacts;
    }

    return selectedContacts.filter(contact =>
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