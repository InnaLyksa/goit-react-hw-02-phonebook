import React, { Component } from 'react';
import { ContactList } from 'components';
import { Container, SectionHeader } from './App.styled';

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

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <SectionHeader>Contacts</SectionHeader>
        <ContactList contacts={contacts} deleteContact={this.deleteContact} />
      </Container>
    );
  }
}
