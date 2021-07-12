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

    shouldComponentUpdate()
    {
        console.log('LifeCycleB should Update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifeCycleB componentDidUpdate')
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