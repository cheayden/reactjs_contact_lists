import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import { defaultFormUser, defaultUsers } from './defaultUsers';

function App() {
  const STORAG_KEY_NAME = 'contacts';

  const getUsers = () => {
    let usersFromStorage = defaultUsers
    if (localStorage !== 'undefined' && localStorage.getItem(STORAG_KEY_NAME) != null) {
      usersFromStorage = JSON.parse(localStorage.getItem(STORAG_KEY_NAME));
    }

    return usersFromStorage;
  };

  const [formUser, setFormUser] = useState(defaultFormUser);
  const [users, setUsers] = useState(getUsers());
  const [saveMode, setSaveMode] = useState(true);

  const modifiedHandler = () => {
    let newUsers = users.map(user => {
      if (user.id === formUser.id) {
        return formUser;
      }

      return user;
    })
    setUsers(newUsers);
    setSaveMode(true);
    storeUsers(newUsers);
  }

  const editEventHandler = (user) => {
    setFormUser(user);
    setSaveMode(false);
  }

  const deleteEventHandler = (deletedUser) => {
    let newUsers = users.filter(user => {
      if (user.id !== deletedUser.id) return user
    })
    setUsers(reorganizeUsers(newUsers));
    storeUsers(newUsers);
  }

  const reorganizeUsers = (usersBefore) => {
    return usersBefore.map((user, key) => {
      user.id = key + 1;
      return user
    });
  }

  const initDate = () => {
    return new Date().toLocaleString('en-Ca', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit'
    }
    );
  }

  const storeUsers = (users) => {
    localStorage.setItem(STORAG_KEY_NAME, JSON.stringify(users));
  }

  const storeHandler = (e) => {
    let newUsers = [...users];
    let user = { ...formUser, id: users.length + 1, date: initDate() };
    setFormUser(user);
    newUsers.push(user);
    setUsers(newUsers);
    storeUsers(newUsers);
  }

  const handleUserInput = (e) => {
    e.preventDefault();
    let newFormUser = { ...formUser };
    newFormUser[e.target.getAttribute('name')] = e.target.value;
    setFormUser(newFormUser);
  }

  return (
    <div className='container frm-contact'>
      <div className="wrapper">
        <Form
          formUser={formUser}
          modifiedHandler={modifiedHandler}
          storeHandler={storeHandler}
          handleUserInput={handleUserInput}
          saveMode={saveMode}
        />
      </div>
      <Table
        users={users}
        editEventHandler={editEventHandler}
        deleteEventHandler={deleteEventHandler}
      />
    </div>
  );
}

export default App;