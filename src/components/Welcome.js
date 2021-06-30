import React, { Component } from 'react';

class Welcome extends Component {
    render()
    {
        // return <h1> class components </h1>
        return <h1> Welcome {this.props.name} {this.props.dev} </h1>
    }
}

 export default Welcome;