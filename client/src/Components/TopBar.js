import React, {useContext} from 'react'
import UserContext from '../Context/user'

function TopBar() {
  const {user}=useContext(UserContext)
  return (
    <div>
         <div className="profile-wrapper" > 
           <div className="profile-name">  {user && user.displayName.charAt(0).toUpperCase()}</div>
        </div>
      
    </div>
  )
}

export default TopBar
