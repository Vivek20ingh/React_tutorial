import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            name: 'Vivek'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps of lifecycleA')
        return null
    }

    componentDidMount()
    {
        console.log('LifecycleA comonentDid mount1')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                 <div>LifecycleA</div>
                 <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA;