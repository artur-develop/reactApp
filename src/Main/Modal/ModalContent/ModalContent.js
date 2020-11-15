import React from 'react'
import EditImage from "../../ImageComponents/EditImage";

function ModalContent({setAge, setImage, setName, setRole, age, name, role}) {
    return (
        <div>
            <input className='inputItems' placeholder='Enter Name' value={name} onChange={event => setName(event.target.value)}/>
            <input className='inputItems' placeholder='Enter age' value={age} type='number' onChange={event => setAge(event.target.value)}/>
            <label className='modalContent'>Choose role:{'\u00A0'}
                <select value={role} onChange={event => setRole(event.target.value)} className='modalContent' >
                    <option value="common">Common user</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <EditImage handleImage={setImage}/><br/>
        </div>
    )
}

export default ModalContent