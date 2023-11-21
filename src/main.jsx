import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import router from './Routers/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout></MainLayout>
    </RouterProvider>
  </React.StrictMode>,
)
