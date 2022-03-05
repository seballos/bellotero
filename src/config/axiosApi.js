import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master',
})

export default instance
