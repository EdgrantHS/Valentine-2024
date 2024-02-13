import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex flex-col justify-center items-center h-dvh w-dvw text-white bg-gradient-to-tr from-purple-600 to-pink-600">
      <App />
    </div>
  </React.StrictMode>,
)
