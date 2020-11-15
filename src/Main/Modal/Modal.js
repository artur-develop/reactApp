import React from 'react'
import './Modal.css'
import AddTodo from "./AddUser/AddTodo";
import EditTodo from "./EditUser/EditTodo";
import {ADD_MODAL} from "./ModalType";


function Modal({ addTodo, handleCloseModal, showModal, editTodo, modalType, userInfo }) {

    return (
        <>
            {showModal &&
            (<div className='modal'>
                <div className='modal-body'>
                        {modalType === ADD_MODAL ? <AddTodo addHandle={addTodo}/> : <EditTodo editHandle={editTodo} userInfo={userInfo}/>}
                    <div className='acceptButtonContainer'>
                        <button type='submit' className='acceptButton' onClick={() => handleCloseModal(false)}>Close</button>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default Modal