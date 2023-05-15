import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  let location = useLocation()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(token !== null)
  }, [])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{from: location}}></Navigate>
  }
  return children
}

export default PrivateRoute