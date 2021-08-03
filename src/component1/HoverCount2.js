import React, { Component } from 'react'

class HoverCount2 extends Component {

    
    render() {
        const {count,incrementcount} =this.props
        return (
            <h2 onMouseOver={incrementcount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCount2
