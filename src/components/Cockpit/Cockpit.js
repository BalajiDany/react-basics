import React from 'react';

const Cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        front: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }

    if (props.showPerson) {
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'yellow',
            color: 'black'
        }
    }

    const warningClasses = [];

    if (props.personLength <= 2) {
      warningClasses.push('text-red');
    }
    if (props.personLength <= 1) {
      warningClasses.push('text-bold');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={warningClasses.join(' ')}>This is really working</p>
            <button
                style={style}
                onClick={props.togglePersons}>Toggle Person</button>

        </div>
    );
}

export default Cockpit;