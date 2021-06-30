import React, { Component } from 'react';

class Message extends Component {
    constructor()
    {
       super()
        this.state={
            message: 'Welcome vistor'
        }
    }
    changeMessage() {
        this.setState({
            message:'Thanku you for subscribing'
        })
    }
    render()
    {
        // return <h1> class components </h1>
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick ={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

 export default Message;