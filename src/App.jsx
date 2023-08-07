import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://digibird.io" target="_blank">
          <img src='/public/logo-350x125.png' className="logo" alt="DigiBird logo" />
        </a>
      </div>
      <h1>DigiBird Test Exercise</h1>
      <div className="card">
        <a href="https://docs.google.com/document/d/1Xph8cecOCQHhl-sXSWPCPr56S_YG_iubhyO3-BafV4E/edit?usp=sharing" target='_blank'>
          <button>
            Exercise Test 
          </button>
        </a>
      </div>
      <p className="read-the-docs">
        Click on the button view details exercise
      </p>
    </div>
  )
}

export default App
