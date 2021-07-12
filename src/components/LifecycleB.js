import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            name: 'Vivek'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifecycleB comonentDid mount1')
    }
    
    render() {
        console.log('LifecycleB render')
        return (

            <div>
                <div>LifecycleB</div>
            </div>
        );
    }
}

export default LifecycleB;