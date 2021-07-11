import React from 'react';


const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline(props) {
    return (
        <div>
             <h1 className='error'>Error</h1>
             {/* <h1 className={style.success}>Success</h1> */}{ /*can't combined with child component */}
            <h1 style={heading}>Inline</h1>
        </div>
    );
}

export default Inline;