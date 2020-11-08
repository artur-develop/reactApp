import React, {useState} from 'react'
import PropTypes from 'prop-types'
import EditImage from "../../Components/EditImage";

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

    return (
        <form className='formContainer' style={{marginBottom : '1rem' }} onSubmit={submitHandler}>
            <h1>User add</h1>
            <input className='inputItems' placeholder='Enter Name' value={name} onChange={event => setName(event.target.value)}/>
            <input className='inputItems' placeholder='Enter age' value={age} type='number' onChange={event => setAge(event.target.value)}/>
            <label className='modalContent'>Choose role:{'\u00A0'}
                <select value={role} onChange={event => setRole(event.target.value)} className='modalContent' >
                    <option value="common">Common user</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <EditImage handleImage={setImage}/><br/>
            <button type='submit'>Add user</button>
        </form>
    )
}

AddTodo.propTypes = {
    addHandle: PropTypes.func.isRequired,
}

export default AddTodo