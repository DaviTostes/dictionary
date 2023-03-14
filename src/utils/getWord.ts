import axios from 'axios';

const getWord = async (word : String) => {
  const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = result.data[0]

  return {
    word: data.word,
    phonetic: data.phonetic,
    meanings: data.meanings
  }
}

export default getWord