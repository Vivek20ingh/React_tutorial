import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedin: true
        }
    }
    
    render() {

        return this.state.isLoggedin && <div> Welcome Vivek</div>

        // return(
        //     this.state.isLoggedin ?
        //     (<div>Welcome Vivek</div> ):
        //     (<div>welcome Guest2 </div>)
        // )

        // let message
        // if(this.state.isLoggedin)
        // {
        //     message=<div> Welcome Vivek</div>
        // }
        // else message=<div>Welcome Guest1</div>
        // return <div>{message}</div>
        // if(this.state.isLoggedin)
        // {
        //     return(<div>Welcome Vivek </div>)
        // } else {
        //     return(<div>Welcome Guest</div>)
        // }
        // return (
        //     <div>
        //        <div> Welcome Vivek</div>
        //        <div>Welcome Guest</div>
        //     </div>
        // );
    }
}

export default UserGreeting;