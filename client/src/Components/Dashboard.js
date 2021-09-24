import React, {useContext} from 'react'
import UserContext from '../Context/user'


function Dashboard() {
  const {user}=useContext(UserContext)
  return (
    <div>
      <h1>Welcome {user && user.displayName}</h1>
    </div>
  )
}

export default Dashboard
