import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";

/*function App() {
  return (
    <div className="App">
      <h1>Hello, Test application</h1>
    </div>
  );
}*/

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.JS] - inside constructor');
    this.state = {
      persons: [
        { id: "sdsdsd1", name: "vaskar1", age: 41 },
        { id: "sdsdsd2", name: "vaskar2", age: 42 },
        { id: "sdsdsd3", name: "vaskar3", age: 43 }
      ],
      showPerson: false
    };
  }

  componentWillMount() {
    console.log('[App.JS] - inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.JS] - inside componentDidMount');
  }  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  deleteNameHandler = personIndex => {
    //const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log('[App.JS] - inside render');

    let person = null;

    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deleteNameHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.toggleNameHandler}
        />
        {person}
      </div>
    );

    //return React.createElement("div",{ className: 'App'},React.createElement("h1",{},"Hi,How are you?"));
  }
}

export default App;
