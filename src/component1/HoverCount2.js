import React, { Component } from 'react'

class HoverCount2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementcount =()=>{
        this.setState(preState =>{
            return {count : preState.count + 1}
        })
    }
    
    
    render() {
        const {count} =this.state
        return (
            <h2 onMouseOver={this.incrementcount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCount2
