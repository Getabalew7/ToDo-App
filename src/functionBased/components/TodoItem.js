import React, { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa"
import styles from "./TodoItem.module.css"
const TodoItem = props => {

    const [editing, setEditing] = useState(false);
    const handleEditing = () => {

        setEditing(true)
    }
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }
    let editMode = {}
    let viewMode = {}
    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.todo

    useEffect(() => {
        return () => {
            console.log("cleaning some memory")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>

                <input type="checkbox"
                    className={styles.checkbox}
                    checked={props.todo.completed}
                    onChange={() => props.handleChangeprobs(id)} />

                <button onClick={() => props.deleteTodoProbs(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input type='text'
                value={title}
                style={editMode}
                className={styles.textInput}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone} />
        </li>)
}

export default TodoItem