import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'unique-1', name: 'Sowndhary', age: 19 },
      { id: 'unique-2', name: 'Balaji', age: 24 },
      { id: 'unique-3', name: 'Manu', age: 34 }
    ],
    showPerson: false
  }

  nameChangeHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(per => per.id === id);
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    this.setState((preState) => { 
      return { showPerson: !preState.showPerson }
    });
  }

  render = () => {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div >
          <Persons
            persons={this.state.persons}
            deletePerson={this.deletePersonHandler}
            nameChange={this.nameChangeHandler} />
        </div>
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            title={this.props.title}
            showPerson={this.state.showPerson}
            personLength={this.state.persons.length}
            togglePersons={this.togglePersonHandler} />
          {person}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
