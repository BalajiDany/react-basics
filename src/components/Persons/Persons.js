import React from 'react'
import Person from './Person/Person'

const Persons = (props) => {
    return props.persons.map((person, index) =>
        <Person
            click={props.deletePerson.bind(this, index)}
            name={person.name}
            age={person.age}
            key={person.id}
            change={props.nameChange.bind(this, person.id)} />
    );
}

export default Persons;