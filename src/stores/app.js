// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios.js'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    isloading: false, // Indique si une opération est en cours de chargement
    error: null, // Stocke les message d'erreur
    films: [],
  }),

  getters: {
    // declaration de getters
    //
  },

  actions: {
    // async loadApp (commit) {
    //   try {
    //     const response = await api.get(''/* dans cette partie ça va prendre l'URL de base et ajoute ce que l'on met dans les ''. */)
    //     return response.data
    //   } catch (error) {
    //     return error
    //   }
    // },

    // fontction pour récuperer les films par un JSON
    async fetchFilmsFromJSON () {
      try {
        const response = await fetch('src/data/ApiTheMovieDatabaseReponse.json')
        const data = await response.json()
        let filmArray = []
        if (Array.isArray(data)) {
          // le JSON est directement un tableau
          filmArray = data
        } else if (data && Array.isArray(data.results)) {
          // le JSON contient un objet avec une propriété 'résults' qui est le tableau
          filmArray = data.results
        } else {
          // Cas par défaut : on affecte la valeur telle quelle
          filmArray = data
        }
        this.films = filmArray
        console.log('Films chargés depuis JSON :', this.films)
      } catch (error) {
        this.error = error
        console.log(' Erreur fetchFilmFromJSON :', error)
      }
    },

    async fetchFilms () {
      try {
        const response = await api.get('movie/popular')
        this.films = response.data.results
        console.log(response.data.results)
        console.log(this.films)
      } catch (error) {
        return error
      }
    },
    async init () {
      // initialisation simple : recupere les donnes de lapi et les stocke dans this.ressources
      // await this.fetchFilms()
      await this.fetchFilmsFromJSON()
    },
  },
})
