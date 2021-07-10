import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={ () => props.greetHandler ('child')}>greet parent components</button>
        </div>
    );
}

export default ChildComponent