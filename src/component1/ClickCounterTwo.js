import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
   
     
    render() {
        const {count,incrementcount}=this.props
        return (
           <button onClick={incrementcount}> Click {count}times</button>
        )
    }
}

export default ClickCounterTwo
