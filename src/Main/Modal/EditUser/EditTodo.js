import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ModalContent from "../ModalContent/ModalContent";

function EditTodo({editHandle, userInfo}) {
    const [name, setName] = useState( userInfo !== null ? userInfo.name : '')
    const [age, setAge] = useState(userInfo !== null ? userInfo.age : '')
    const [role, setRole] = useState(userInfo !== null ? userInfo.role : 'common')
    const [image, setImage] = useState(userInfo !== null ? userInfo.image : '')

    function submitHandler(event) {
        event.preventDefault()

        if (name.trim() && age.trim() && role.trim()) {
            editHandle(userInfo.id, name, age, role, image);
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
            <h1>User edit</h1>
            <ModalContent {...params}/>
            <button type='submit'>Edit user</button>
        </form>
    )
}

EditTodo.propTypes = {
    editHandle: PropTypes.func.isRequired,
}

export default EditTodo