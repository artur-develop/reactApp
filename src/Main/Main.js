import React, {useState} from 'react'
import TodoList from "./Todo/TodoList";
import Modal from "./Modal/Modal";
import {ADD_MODAL} from "./Modal/ModalType";
import uuid from 'uuid/dist/v4';

function Main() {
    const [todos, setTodos] = React.useState(
        [
            {id: uuid(), name: 'Artur', age: '21', role: 'admin', image: ''},
            {id: uuid(), name: 'Gleb', age: '14', role: 'common', image: ''},
            {id: uuid(), name: 'Max', age: '54', role: 'common', image: ''},
        ])

    function removeTodo(id) {
        let confirmDelete = window.confirm("Are you sure?");
        if (confirmDelete) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    }

    function editTodo(id, name, age, role, image) {
        const users = todos;
        const index = users.findIndex(todo => todo.id === id)
        users.splice(index,1, { id: id,
            name: name,
            age: age,
            role: role,
            image: image});
        console.log(todos);
    }

    function onEditButton(id, name, age, role, image) {
        editTodo(id, name, age, role, image)
        handleCloseModal()
    }

    function addTodo(name, age, role, image) {
        const users = todos;
        const userInfo = {
            id: uuid(),
            name: name,
            age: age,
            role: role,
            image: image,
        }

        setTodos(users.concat([userInfo]))
        users.push(userInfo);
        console.log(todos);
        console.log(role);
    }

    function onAddButton(name, age, role, image) {
        addTodo(name, age, role, image)
        handleCloseModal()
    }

    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState('')
    const [userInfo, setUserInfo] = useState(null)

    function handleModalType(type, currentUser = null) {
        if (currentUser !== null) {
            setUserInfo(currentUser);
        }
        setModalType(type);
        handleShowModal();
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
            <div className='wrapper'>
                <h1>Face'S</h1>
                <button className='acceptButton' onClick={() => handleModalType(ADD_MODAL)}>Add user</button>
                <Modal addTodo={onAddButton} editTodo={onEditButton} handleCloseModal={handleCloseModal}
                       showModal={showModal} isOpen={setShowModal} modalType={modalType} userInfo={userInfo}/>
                <div className='cards'>
                    {todos.length ?
                        <TodoList removeTodo={removeTodo} handleModalType={handleModalType} todos={todos}/> :
                        <p align='center'>No Face's :-|</p>}
                </div>
            </div>
    )
}

export default Main;