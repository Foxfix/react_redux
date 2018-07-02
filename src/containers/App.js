import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App.js] Relevant persons", props)
    }

    componentWillMount () {
        console.log('[App.jd] Inside componentWillMount ()');
    }

    componentDidMount () {
        console.log('[App.jd] Inside componentDidMount ()');
    }

    state = {
        persons: [
            {id: 'aasdf', name: 'Nix', age: 34},
            {id: 'adwe', name: 'Job', age: 23},
            {id: 'tgyhh', name: 'Moo', age: 64},
        ],
        showPersons: false
    };

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
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    togglePerson = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
                console.log('[ App.jd] Inside render ()');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                     persons={this.state.persons}
                     clicked={this.deletePersonHandler}
                     chenged={this.nameChangeHandler}/>;
        }


        return (
            <div className={classes.App}>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePerson }/>
                {persons}
            </div>
        );
    }
}

export default App;
