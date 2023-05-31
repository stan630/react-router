import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthRequired = () => {
  const isLoggedIn = false
  if (!isLoggedIn) {

  }
    return <Outlet />
    
}

export default AuthRequired