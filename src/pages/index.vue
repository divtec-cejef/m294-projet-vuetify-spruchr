<template>
  <v-container></v-container>
  <div>
  <v-row>
    <v-col v-for="film in store.films" :key="film.id" cols="12" md="4">
      <v-card height="450" @click="dialog = true, prendreIdFilm(film)">
        <v-img height="300" :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" />
        <v-card-title>{{ film.title }}</v-card-title>
        <v-card-text class="text-truncate">{{ film.overview }}</v-card-text>
        <!-- bouton coeur : utilisation correcte de v-btn + v-icon -->
        <!-- TODO: faire que appuyer sur le favoris n'ouvre pas le dialogue -->
        <v-card-actions>
          <v-btn icon @click="toggleFavorite(film.id)">
            <v-icon>{{ isFavorite(film.id) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- La boîte de dialogue -->
      <v-dialog v-if="idFilm == film" v-model="dialog" max-width="500">
        <v-card>
          <v-img height="300" :src="'https://image.tmdb.org/t/p/w500' + idFilm.poster_path" />
          <v-card-title>{{ idFilm.title }}</v-card-title>
          <v-card-text>
            Date de sortie : {{ idFilm.release_date }}</v-card-text>
          <v-card-text>{{ idFilm.overview }}</v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const favorites = ref([]) // tableau d'ids
  const dialog = ref(false)
  const idFilm = ref('')
  const carteDejaGenere = ref(0)

  // prend l'ID du film sur lequel on clique
  function prendreIdFilm (id) {
    idFilm.value = id
  }

  // charge les favoris depuis localStorage (si présent)
  function loadFavorites () {
    try {
      const raw = localStorage.getItem('favorites')
      favorites.value = raw ? JSON.parse(raw) : []
    } catch {
      favorites.value = []
    }
  }

  // sauvegarde dans localStorage
  function saveFavorites () {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    } catch {}
  }

  function isFavorite (id) {
    return favorites.value.includes(id)
  }

  function toggleFavorite (id) {
    if (isFavorite(id)) {
      favorites.value = favorites.value.filter(fav => fav !== id)
    } else {
      favorites.value.push(id)
    }
    saveFavorites()
  }

  onMounted(() => {
    store.init()
    console.log('app monté, store initialisée')
    loadFavorites()
    console.log('Favoris Chargé')
  })
</script>
