import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagePng from "./assets/a.jpg"
import imageJpg from "./assets/images.jpg"

function App() {
  const [count, setCount] = useState(0)

  let title = "Seil"
  let document = "Adilet"

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={imageJpg} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={imagePng} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{document} + {title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
