import axios from 'axios';

const getWord = async (word : String) => {
  const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  console.log(result)
}

export default getWord