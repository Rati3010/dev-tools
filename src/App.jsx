import { useState } from 'react';
import './App.css';
import NetworkRequest from './components/NetworkRequest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetworkRequest/>
    </>
  )
}

export default App
