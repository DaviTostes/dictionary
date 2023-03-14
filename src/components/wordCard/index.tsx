import './styles.css'

const WordCard = ({result} : any) => {
  return (
    <div className="wordCard">
      <div className="word-wrapper">
        <h1>{result.word}</h1>
        <p>{result.phonetic}</p>
      </div>
      <div className="meanings-wrapper">
        {result.meanings.map((meaning : any, index : any) => 
        <div key={index} className='meaning'>
          <h3>{meaning.partOfSpeech}</h3>
          <div className="meanings">
            {meaning.definitions.map((definition: any, index : any) => 
            <p key={index}>{definition.definition}</p>
            )}
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default WordCard