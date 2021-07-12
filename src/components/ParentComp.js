import React, { Component } from 'react';
import MemoComponent from './MemoComponent';
import Purecom from './Purecom';
import RegCom from './RegCom';

class ParentComp extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            name: 'vivek'
        }
    }

    componentDidMount()
    {
        setInterval(() =>{
           this.setState({
               name: 'vivek'
           })
        }, 2000)
    }
    

    render() {
        console.log('Parent')
        return (
            <div>
                Parent Compenent
                <MemoComponent  name={this.state.name}/>
                {/* <RegCom name={this.state.name}/>
                <Purecom name={this.state.name}/> */}
            </div>
        );
    }
}

export default ParentComp;