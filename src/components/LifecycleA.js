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

    shouldComponentUpdate()
    {
        console.log('LifeCycleA should Update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifeCycleA componentDidUpdate')
    }
    changeState =() =>{
        this.setState({
            name:' Codevolution'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                 <div>LifecycleA</div>
                 <button onClick={this.changeState}>Change State</button>
                 <LifecycleB/>
            </div>
        );
    }
}

export default LifecycleA;