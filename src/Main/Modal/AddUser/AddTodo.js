import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ModalContent from "../ModalContent/ModalContent";

function AddTodo({addHandle}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [role, setRole] = useState('common')
    const [image, setImage] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (name.trim() && age.trim() && role.trim()) {
            addHandle(name, age, role, image);
        }
    }

    const params = {
        setImage: setImage,
        setAge: setAge,
        setRole: setRole,
        setName: setName,
        role: role,
        name: name,
        age: age,
    }

    return (
        <form className='formContainer' style={{marginBottom : '1rem' }} onSubmit={submitHandler}>
            <h1>User add</h1>
            <ModalContent {...params}/>
            <button type='submit'>Add user</button>
        </form>
    )
}

AddTodo.propTypes = {
    addHandle: PropTypes.func.isRequired,
}

export default AddTodo