import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/index'
import Login from './views/login'
import Dashboard from './views/admin/dashboard'
import PrivateRoute from './privateRoute'
import { AuthContext } from './services/auth'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext.Provider>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/admin">
            <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>  
  </React.StrictMode>
)
