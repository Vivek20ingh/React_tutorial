import React from 'react';

function Column(props) {
    const items =[{tittle: 4}]
    return (
        <React.Fragment>
            {
                items.map(item =>(
                    <React.Fragment key={item.id}>
                        <h1> Title</h1>
                        <p>{item.tittle}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Vivek</td>
        </React.Fragment>
    );
}

export default Column;