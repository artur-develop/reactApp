import React from 'react'
import EditImage from "../../ImageComponents/EditImage";

function ModalContent({setImage, setRole, role, renderAge, renderName}) {

    return (
        <div>
            {renderName()}
            {renderAge()}
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