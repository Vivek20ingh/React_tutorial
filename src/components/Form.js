import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            comments: '',
            topic: 'vue'
        }
    }

    handleUsernameChange =(e) =>{
        this.setState({
            username: e.target.value
        })
    }
    handleUserCommentsChange =(e)=>
    {
        this.setState({
            comments: e.target.value
        })
    }
    
    hadleTopicChange =(e) =>
    {
        this.setState({
            topic: e.target.value
        })
    }
    handleSubmit = (e) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        e.preventDefault()
    }
    render() {
        const {username,comments,topic } =this.state
        return (
           <form onSubmit ={this.handleSubmit}>
                <div>
               <label>Username</label>
               <input 
               type='text' 
               value={this.state.username} 
               onChange={this.handleUsernameChange}
               />
            </div>
            <div>
                <label>comments</label>
                <textarea value={comments} onChange={this.handleUserCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.hadleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="summit">Summit</button>
           </form>
        );
    }
}

export default Form;