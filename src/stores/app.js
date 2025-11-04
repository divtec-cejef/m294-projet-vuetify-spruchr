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
      //initialisation simple : recupere les donnes de lapi et les stocke dans this.ressources
      await this.fetchFilms()
    },
  },
})
