import React, {useState} from 'react'
import PropTypes from 'prop-types'
import EditImage from "../../Components/EditImage";

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

    return (
        <form className='formContainer' style={{marginBottom : '1rem' }} onSubmit={submitHandler}>
            <h1>User edit</h1>
            <input className='inputItems' placeholder={name} value={name} onChange={event => setName(event.target.value)}/>
            <input className='inputItems' placeholder={age} value={age} type='number' onChange={event => setAge(event.target.value)}/>
            <label className='modalContent'>Choose role:{'\u00A0'}
                <select value={role} onChange={event => setRole(event.target.value)} className='modalContent' >
                    <option value="common">Common user</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <EditImage handleImage={setImage}/><br/>
            <button type='submit'>Edit user</button>
        </form>
    )
}

EditTodo.propTypes = {
    editHandle: PropTypes.func.isRequired,
}

export default EditTodo