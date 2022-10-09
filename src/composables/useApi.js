import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

const useApi = () => {
  return { instance }
}

export default useApi
