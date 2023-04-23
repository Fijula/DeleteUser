import { useState,useEffect } from 'react'

import './App.css'
import UserList from './components/UserList'
import  axios from 'axios'
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
  
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      console.log(response.data)
      setUsers(response.data);
    });
  }, [])
  return (
    <>
      <UserList users= {users}>
          </UserList>
    </>
  )
}

export default App
