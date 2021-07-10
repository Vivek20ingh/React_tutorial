import React from 'react';
import Person from './Person';
const name =['Vivek','Ankit','Aditya','Rajeev']
const namelist =   name.map((name) => <h2>{name}</h2>)
const persons = [
    {id: 1,name: 'Ankit',age :22,skill: 'Android'},
    {id: 2,name: 'Vivek',age :21,skill: 'Web DEvlopment'},
    {id: 3,name: 'Rajeev',age :22,skill: 'Android'},
    {id: 4,name: 'Anuj',age :20,skill: 'Machine Learning'}
    
]
const personslist =persons.map(person => <Person person={person}/>)
function Namelist() {
    return (
        <div>
            {name.map((name) => <h2>{name}</h2>)}
            {namelist}
            {personslist}
        </div>
    );
}

export default Namelist;