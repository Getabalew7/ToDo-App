import React from 'react'
import TodoItem from './TodoItem'
class TodoList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (

                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeprobs={this.props.handleChangeprobs} 
                        deleteTodoProbs={this.props.deleteTodoProbs}
                        setUpdate={this.props.setUpdate}
                        />
                ))}
            </ul>
        )
    }
}
export default TodoList