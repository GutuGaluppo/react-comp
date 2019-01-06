import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Gutu', age: '34' },
      { id: 'fgh', name: 'Nica', age: '33' },
      { id: 'jkl', name: 'Gu', age: '30' }
    ],
    otherState: 'some other value!',
    showPersons: false,
  }

  switchNameHandler = () => {
    // console.log('Was clicked')
    //DON'T DO THIS: this.state.person[0].name = "Augusto";
    this.setState({
      persons: [
        { name: 'Gutu', age: '34' },
        { name: 'Nica', age: '33' },
        { name: 'Noah', age: '09' }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // ES6 SPREAD OPERATOR
    persons.splice(personIndex, 1); //THIS REMOVES AN ELEMENT FROM THE ARRAY
    this.setState({
      persons: persons
    })
  }

  render() {

    // CSS inline to apply only for an expecific element
    const style = {
      backgroundColor: 'aqua',
      font: 'inherit',
      boxShadow: '0 2px 3px silver',
      border: '1px solid blue',
      borderRadius: '7px',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>);
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <h2>Another header</h2>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
