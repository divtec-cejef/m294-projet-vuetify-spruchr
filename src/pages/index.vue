<template>
  <v-container>
    <!-- 🔍 Barre de recherche -->
    <v-text-field
      v-model="searchQuery"
      class="mb-6"
      clearable
      label="Rechercher un film..."
      outlined
      prepend-inner-icon="mdi-magnify"
    />

    <!-- 🎬 Liste des films -->
    <v-row>
      <v-col
        v-for="film in filteredFilms"
        :key="film.id"
        cols="12"
        md="4"
      >
        <router-link
          class="text-decoration-none"
          :to="`/film/${film.id}`"
        >
          <v-card height="450">
            <v-img
              height="300"
              :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
            />
            <v-card-title>{{ film.title }}</v-card-title>
            <v-card-text class="text-truncate">{{ film.overview }}</v-card-text>

            <!-- ❤️ Bouton favori -->
            <v-card-actions>
              <v-btn icon @click.prevent="toggleFavorite(film.id)">
                <v-icon>
                  {{ isFavorite(film.id) ? 'mdi-heart' : 'mdi-heart-outline' }}
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const favorites = ref([])
  const searchQuery = ref('') // 🔍 champ de recherche

  // 🔎 filtrer les films selon la recherche
  const filteredFilms = computed(() => {
    if (!searchQuery.value) return store.films
    const query = searchQuery.value.toLowerCase()
    return store.films.filter(film =>
      film.title.toLowerCase().includes(query),
    )
  })

  // charge les favoris depuis localStorage
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
