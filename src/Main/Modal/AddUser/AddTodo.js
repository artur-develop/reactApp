import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ModalContent from "../ModalContent/ModalContent";
import useInputComponent from "../useInputComponent";

function AddTodo({addHandle}) {
    const {value:age, renderInput:renderAge} = useInputComponent('Enter Age')
    const {value:name, renderInput:renderName} = useInputComponent('Enter Name')

    const [role, setRole] = useState('common')
    const [image, setImage] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (age.trim() && name.trim() && role.trim()) {
            addHandle (
                name,
                age,
                role,
                image
            );
        }
    }

    const params = {
        setImage: setImage,
        setRole: setRole,
        role: role,
        renderName: renderName,
        renderAge: renderAge
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