import React, {Component} from "react";
import classes from "./Person.css";


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.jd] Inside Constructor', props)
    }
    componentWillMount () {
        console.log('[Person.jd] Inside componentWillMount ()');
    }

    componentDidMount () {
        console.log('[Person.jd] Inside componentDidMount ()');
    }

    render () {
        console.log('[ Person.jd] Inside render ()');
        return (
            <div className={classes.Person}>
            <p onClick={this.props.click}>I'm a person {this.props.name} I'm {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
