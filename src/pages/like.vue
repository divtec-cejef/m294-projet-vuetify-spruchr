<template>
  <v-container></v-container>
  <v-row>
    <template v-for="film in store.films" :key="film.id">
      <v-col v-if="isFavorite(film.id)" cols="12" md="4">
        <v-card height="450">
          <v-img height="300" :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" />
          <v-card-title>{{ film.title }}</v-card-title>
          <v-card-text class="text-truncate">{{ film.overview }}</v-card-text>

            <v-btn icon @click="toggleFavorite(film.id)">
              <v-icon>{{ isFavorite(film.id) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
            </v-btn>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const favorites = ref([])

  function loadFavorites () {
    try {
      const raw = localStorage.getItem('favorites')
      favorites.value = raw ? JSON.parse(raw) : []
    } catch {
      favorites.value = []
    }
  }

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
