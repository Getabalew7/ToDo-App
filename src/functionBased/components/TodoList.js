import React from 'react'
import TodoItem from './TodoItem'
const TodoList = props => {


    return (
        <ul>
            {props.todos.map(todo => (

                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeprobs={props.handleChangeprobs}
                    deleteTodoProbs={props.deleteTodoProbs}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
}

export default TodoList