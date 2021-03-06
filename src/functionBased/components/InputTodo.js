import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"
const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: ""
    });

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProbs(inputText.title)
            setInputText({
                title: "",
            })
        } else {
            alert("Please enter title")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text"
                value={inputText.title}
                className="input-text"
                placeholder="Add todo..."
                name="title"
                onChange={onChange} />
            <button className="input-submit">
                <FaPlusCircle
                    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
                />
            </button>
        </form>

    )
}

export default InputTodo