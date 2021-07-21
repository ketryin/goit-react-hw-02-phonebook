import React, { Component } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert("Attempt to create existing contact!");
      return;
    }

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: shortid.generate(), name, number },
      ],
    }));
  };
  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  onDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        <ContactsList
          filter={filter}
          contacts={contacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
