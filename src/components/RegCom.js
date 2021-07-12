import React, { Component } from 'react';

class RegCom extends Component {
    render() {
        console.log('RegCom')
        return (
            <div>
                Regular Component {this.props.name} 
            </div>
        );
    }
}

export default RegCom;