import './App.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import router from './Routers/Routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
      <Toaster />
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </div>
  )
}

export default App
