import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem"


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList({ todos, removeTodo, handleModalType }) {
    return (
        <ul style={styles.ul}>
            { todos.map((todo,index) => {
                return <TodoItem removeTodo={removeTodo} handleModalType={handleModalType} todo={todo} key={todo.id} index={index}/>
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList