import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
        title: '',
    }

    onChange = e => {
        this.setState({
            //if the form have more value
            //then we can use 
            [e.target.name]: e.target.value
            //title:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        //console.log(this.state.title)
        if (this.state.title.trim()) {
            this.props.addTodoProbs(this.state.title)
            this.setState({
                title: ""
            });
        } else {
            alert("Please enter todo")
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" name='title' placeholder="Add todo..."
                    value={this.state.title} onChange={this.onChange} />
                <button className="input-submit">submit</button>
            </form>
        )
    }
}

export default InputTodo