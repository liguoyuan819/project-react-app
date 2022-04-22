import { useState } from 'react'
import './App.css'
import Stone from './components/games_01/Stone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {<Stone/>}
    </div>
  )
}

export default App
