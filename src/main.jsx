import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HeaderProvider } from './Contexts/HeaderProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </React.StrictMode>,
)
