import React, { Component } from 'react'
import  UserConsumer  from './userContext';

 class ComponentF extends Component {
    render() {
        return (
            // <UserConsumer>
            //     {
            //         () =>{
            //             return <div> Hello </div>
            //         }
            //     }
            // </UserConsumer>
            <div>hello</div>
            
        )
    }
}

export default ComponentF;