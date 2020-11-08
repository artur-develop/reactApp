import React, {useState} from 'react'
import TodoList from "./Todo/TodoList"
import Context from "./context"
import Modal from "./Modal/Modal";

function App() {
    const [todos, setTodos] = React.useState(
        [
            {id: 1, titleName: 'Name', name: 'Artur', titleAge: 'Age', age: '21', role: 'admin', image: ''},
            {id: 2, titleName: 'Name', name: 'Gleb', titleAge: 'Age', age: '14', role: 'common', image: ''},
            {id: 3, titleName: 'Name', name: 'Max', titleAge: 'Age', age: '54', role: 'common', image: ''},
        ])

    let [letMistake, setLetMistake] = useState(0)


    function removeTodo(id) {
        let confirmDelete = window.confirm("Are you shure?");
        if (confirmDelete) {
            setLetMistake(letMistake + 1);
            setTodos(todos.filter(todo => todo.id !== id));
        }
    }

    function editTodo(id, name, age, role, image) {
        const index = todos.findIndex(todo => todo.id === id)
        todos.splice(index,1, { id: id,
                                                  titleName: 'Name',
                                                  name: name,
                                                  titleAge: 'Age',
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
        const userInfo = {
            id: (todos.length + 1 + letMistake),
            titleName: 'Name',
            name: name,
            titleAge: 'Age',
            age: age,
            role: role,
            image: image,
        }

        setTodos(todos.concat([userInfo]))
        todos.push(userInfo);
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
      <Context.Provider value={{removeTodo, handleModalType}}>
          <div className='wrapper'>
              <h1>Face'S</h1>
              <button className='acceptButton' onClick={() => handleModalType('add')}>Add user</button>
              <Modal addTodo={onAddButton} editTodo={onEditButton} handleCloseModal={handleCloseModal}
                     showModal={showModal} isOpen={setShowModal} modalType={modalType} userInfo={userInfo}/>
              <div className='cards'>
                  {todos.length ? <TodoList todos={todos}/> : <p align='center'>No Face's :-|</p>}
              </div>
          </div>
      </Context.Provider>
    )
}

export default App;
