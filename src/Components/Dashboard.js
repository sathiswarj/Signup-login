import React from 'react'
import { authStore } from '../Components/store/authStore';

const Dashboard = () => {
   const loggedInUser = authStore((state) => state.loggedInUser.name);
  return (
    <div style={{textAlign:'center'}}>
      <h1>Dashboard {loggedInUser}</h1>
      </div>
  )
}

export default Dashboard