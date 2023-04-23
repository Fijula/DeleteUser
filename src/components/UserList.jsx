import { useState,useEffect} from 'react'

function UserList({users}) {
  const [usersList, setUsersList] = useState(users)

  useEffect(() =>{
setUsersList(users)
  },[users]);
  const deleteUserBtn = (id) => {
    const newuser = usersList.filter((data) => {
      return data.id !== id
    })
    setUsersList(newuser)
  }
  
  return (
    <ul>
      {usersList.map((data) => {
          if(data.id<5)
          {
        return (
        
          <li key={data.id}>
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
            <button  style ={{backgroundcolor:"black",cursor:"pointer"}} onClick={() => deleteUserBtn(data.id)}>DELETE</button>
            <hr/>
          </li>
        )
          }
      })}
    </ul>
  )
}

export default UserList
