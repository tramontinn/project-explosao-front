import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    let location = useLocation()
    const autorizado = true 

    if (!autorizado) {
        return <Navigate to="/login" replace state={{from: location}}></Navigate>
    }
  return children
}

export default PrivateRoute