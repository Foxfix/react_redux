import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.jd] Inside Constructor', props)
    }
    componentWillMount () {
        console.log('[Persons.jd] Inside componentWillMount ()');
    }

    componentDidMount () {
        console.log('[Persons.jd] Inside componentDidMount ()');
    }

    componentWillReceiveProps (nextProps) {
        console.log('[UPDATE Persons.jd] Inside componentWillRecieveProps', nextProps);
    }

  render () {
     return this.props.persons.map((person, index)=> {
         return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={( event) => this.props.changed(event, person.id)}/>
     });
  }
}

export default Persons;
