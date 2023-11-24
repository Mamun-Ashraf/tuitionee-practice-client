import './App.css'
import { RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import router from './Routers/Routes'

function App() {

  return (
    <div>
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </div>
  )
}

export default App
