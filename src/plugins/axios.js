import axios from 'axios'

const APIKey = import.meta.env.VITE_API_KEY

const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create ({
  baseURL, // Assure-toi que cette variable est définie dans ton .env
  timeout: 10_000, // 10 secondes de timeout
  params: { api_key: APIKey, language: 'fr-FR' },
})

// // Si l'API utilise une clé dans les params (ex. ?key=API_KEY
// api.defaults.params = api.defaults.params || {}
// api.defaults.params.key = import.meta.env.VITE_API_KEY
// // Sinon, pour un header Authorization :
// api.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_API_KEY}`

export default api
