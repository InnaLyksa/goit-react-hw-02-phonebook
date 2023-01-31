import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList, ContactForm } from 'components';
import { Container, SectionHeader, PageHeader } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = (newName, newNumber) => {
    // console.log(newName, newNumber);
    const newContact = {
      id: nanoid(),
      name: newName,
      number: newNumber,
    };

    const { name } = newContact;

    this.checkedDublicateContact(name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  checkedDublicateContact = validatedName =>
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === validatedName.toLowerCase()
    );

  render() {
    const { state, addContact, deleteContact } = this;
    return (
      <Container>
        <PageHeader>Phonebook</PageHeader>
        <ContactForm onSubmit={addContact} />
        <SectionHeader>Contacts</SectionHeader>
        <ContactList contacts={state.contacts} deleteContact={deleteContact} />
      </Container>
    );
  }
}
