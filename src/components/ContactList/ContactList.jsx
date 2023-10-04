import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem, ButtonDel } from './ContactList_styled';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          <>
            {contact.name} : {contact.number}
          </>
          <ButtonDel
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ButtonDel>
        </ContactItem>
      ))}
    </List>
  );
};
