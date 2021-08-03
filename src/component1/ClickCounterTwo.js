import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count: 0
         }
     }

     incrementcount =()=>{
         this.setState(preState =>{
             return {count : preState.count + 1}
         })
     }
     
    render() {
        const {count}=this.state
        return (
           <button onClick={this.incrementcount}> Click {count}times</button>
        )
    }
}

export default ClickCounterTwo
