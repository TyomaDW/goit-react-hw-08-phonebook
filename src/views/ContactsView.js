import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import ContainerContacts from '../components/ContainerContacts';
import Filter from '../components/Filter';
import Section from '../components/Section';

export default function ContactsView() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <ContainerContacts title="Contacts">
          <Filter />
          <ContactList />
        </ContainerContacts>
      </Section>
    </>
  );
}
