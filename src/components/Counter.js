import React, { Component } from 'react';

class Counter extends Component {
    constructor(propos)
    {
        super(propos)
        this.state={
            count: 0
        }
    }
    increment()
    {
        // this.setState({
        //     count: this.state.count+1
        // },()=>{
        //     console.log('callback value', this.state.count)
        // })

        this.setState((preCount) =>({
            count:preCount.count+4
            
        }),(prevState)=>{
            console.log('23 ', this.state.count)
        })
        console.log(this.state.count + " line 25")
    }
    incrementfive()
    {
        this.increment()
        // this.increment()
        // this.increment()
        // this.increment()
        // this.increment()
    }
    render()
    {
        return(
            <div>
               <div> Count - {this.state.count}</div>
               <button onClick={() => this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

 export default Counter;