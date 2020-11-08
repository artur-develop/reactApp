import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context"
import ShowImage from "../Components/ShowImage";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo }) {
    const {removeTodo} = useContext(Context)
    const {handleModalType} = useContext(Context)

    const classes = [];

    if (todo.role === 'admin') {
        classes.push('adminModal');
    } else {
        classes.push('commonModal');
    }

    return(
        <li className={classes.join(' ')} style={styles.li}>
            <ShowImage image={todo.image}/>
            <span>
                <div><strong>{todo.titleName}:</strong> {todo.name}</div>
                <div><strong>{todo.titleAge}:</strong> {todo.age}</div>
            </span>

            <div className='cardButtons'>
                <button className='rm' onClick={() => handleModalType('edit', todo)}>Edit</button>
                {'\u00A0'}
                <button className='rm' onClick={() => removeTodo(todo.id)}>Delete</button>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
    isAdmin: PropTypes.bool
}

export default TodoItem