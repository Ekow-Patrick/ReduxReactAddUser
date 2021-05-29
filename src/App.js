import { useState } from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser'

const App = () =>{
  const[showAddUser, setShowAddUser] = useState
  (false)
  const [ users, setUsers] = useState (
    [
        {
            id: 1,
            name: 'Ekow-Patrick Nyamekyiame',
            email: 'ekp@email.com',
            contact: '0244419419',
            terms: true,
        },
        {
            id: 2,
            name: 'Ayekwor Pat',
            email: 'ayekpat@email.com',
            contact: '0245412415',
            terms: true,
        },
        {
            id: 3,
            name: 'Charway',
            email: 'chacha@email.com',
            contact: '0202457896',
            terms: true,
        }
        ]
)

// Add User Form
const addUser =(user) => {
  const id = Math.floor(Math.random() * 1000) +1
  const newUser ={id,...user}
  setUsers([...users, newUser])
}

// Delete User Form
 const deleteUser = (id) => {
  setUsers(users.filter((user)=> user.id !==id))
}

  return (
    <div className="container">
      <Header onAdd ={() => setShowAddUser(! showAddUser)} 
     showAdd={showAddUser}/>
      {showAddUser &&<AddUser onAdd={addUser} />}
     {users.length > 0 ? <Users users ={users} onDelete={deleteUser} /> : 'No Registered User to show'}
    </div>
  );
}

export default App;
