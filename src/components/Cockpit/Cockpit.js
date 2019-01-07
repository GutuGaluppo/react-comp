import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) {
        btnClass = style.Red;
    }

    // const classStyle = ['red', 'bold'].join(' ');
    const classStyle = [];
    if (props.persons.length <= 2) {
        classStyle.push(style.red); // classStyle = ['red'] at this point
    }
    if (props.persons.length <= 1) {
        classStyle.push(style.bold); // classStyle = ['red', 'bold'] at tjis point 
    }

    return (
        <div className={style.Cockpit}>
            <h1>React App</h1>
            <p className={classStyle.join(' ')}>This is working</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    )
}

export default cockpit;
