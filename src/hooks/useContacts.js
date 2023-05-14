import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectContactsFilter,
} from 'redux/contacts/contactSelectors';

export const useContacts = () => {
  const selectedContacts = useSelector(selectContacts);
  const IsLoading = useSelector(selectIsLoading);
  const contactError = useSelector(selectError);
  const contactFilter = useSelector(selectContactsFilter);
  return {
    selectedContacts,
    IsLoading,
    contactError,
    contactFilter,
  };
};