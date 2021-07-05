import React, { Component } from 'react';

class Welcome extends Component {
    render()
    {
        const {name,dev}= this.props
        // return <h1> class components </h1>
        return (
            <div>
                <h1> Welcome {this.props.name} {this.props.dev} </h1>
                <h1> Welcome {name} {dev} </h1>
            </div>
        )
    }
}

 export default Welcome;