import './App.css'

import {IoMdSend} from 'react-icons/io'
import getWord from './utils/getWord'
import { useState } from 'react'

function App() {
  const [word, setWord] = useState('')
  const [result, setResult] = useState({})

  const getApiResult = () => {
    getWord(word)
  }

  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <div className="input-wrapper">
          <input type="text" id='inputWord' onChange={e => setWord(e.target.value)}/>
          <label htmlFor="inputWord">Type your Word Here...</label>
          <button onClick={getApiResult}><IoMdSend /></button>
        </div>
        <div className="output-wrapper">
        </div>
      </main>
    </div>
  )
}

export default App
