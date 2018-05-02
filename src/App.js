import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'aasdf', name: 'Nix', age: 34},
            {id: 'adwe', name: 'Job', age: 23},
            {id: 'tgyhh', name: 'Moo', age: 64},
        ],
        showPersons: false
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
            };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({
            persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePerson = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            color: 'white',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'salmon',
                color: 'black'
            }
        };

        let person = null;
        if (this.state.showPersons) {
            person = (
                 <div>
                     {this.state.persons.map((person, index)=> {
                         return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangeHandler(event, person.id)}/>
                     })}

                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            }
        }
        let classes = [];
        if(this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <=1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
            <div className="App">
                <p className={classes.join(' ')}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    style={style}
                    onClick={this.togglePerson}>Switch Name</button>
                {person}
            </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
