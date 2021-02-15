import React, { useState, useEffect } from "react"
import TodoList from "./TodoList";
import Header from "./Header"
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"

import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"
function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem("todos")
  const savedTodos = JSON.parse(temp)
  return savedTodos || []
}
const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  const delTodo = (id) => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      })
    ])
  }

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
  }
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo;
      })
    )
  }

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  /* useEffect(() => {
    console.log("test run")

    const tmp = localStorage.getItem("todos");
    const loadedtodo = JSON.parse(tmp)
    if (loadedtodo) {
      setTodos(loadedtodo)
    }
  }, []) */


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProbs={addTodoItem} />
              <TodoList todos={todos}
                handleChangeprobs={handleChange}
                deleteTodoProbs={delTodo}
                setUpdate={setUpdate} />
            </div>
          </div>
        </Route>
        <Route  path="/about">
          <About />
        </Route>
        <Route exact path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  )

}

export default TodoContainer