import './App.css'
import { useEffect, useState } from 'react'

import {IoMdSend} from 'react-icons/io'
import getWord from './utils/getWord'
import WordCard from './components/wordCard'

function App() {
  const [word, setWord] = useState('')
  const [result, setResult] = useState({word: '', phonetic: '', meanings: []})

  const getApiResult = async () => {
    setResult(await getWord(word))
    const button = document.querySelector('button')
    button?.setAttribute('disabled', 'disabled')
  }

  useEffect(() => {
    const button = document.querySelector('button')
    button?.removeAttribute('disabled')
  }, [result])

  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <main>
        <div className="input-wrapper">
          <input type="text" id='inputWord' placeholder='Type your word here...' onChange={e => setWord(e.target.value)}/>
          <button onClick={getApiResult}><IoMdSend /></button>
        </div>
        <div className="output-wrapper">
          <WordCard result={result} />
        </div>
      </main>
    </div>
  )
}

export default App
