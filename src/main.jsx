import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HeaderProvider } from './Contexts/HeaderProvider'
import { Authprovider } from './Contexts/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HeaderProvider>
        <App />
      </HeaderProvider>
    </Authprovider>
  </React.StrictMode>,
)
