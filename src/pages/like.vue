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

    <v-row>
      <template v-for="film in filteredFilms" :key="film.id">
        <v-col v-if="isFavorite(film.id)" cols="12" md="4">
          <v-card height="450" @click="dialog = true, prendreIdFilm(film)">
            <v-img
              height="300"
              :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
            />
            <v-card-title>{{ film.title }}</v-card-title>
            <v-card-text class="text-truncate">{{ film.overview }}</v-card-text>

            <!-- ❤️ Bouton favori -->
            <v-card-actions>
              <v-btn icon @click.stop="toggleFavorite(film.id)">
                <v-icon>
                  {{ isFavorite(film.id) ? 'mdi-heart' : 'mdi-heart-outline' }}
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- 💬 Détail du film -->
          <v-dialog v-if="idFilm == film" v-model="dialog" max-width="500">
            <v-card>
              <v-img
                height="300"
                :src="'https://image.tmdb.org/t/p/w500' + idFilm.poster_path"
              />
              <v-card-title>{{ idFilm.title }}</v-card-title>
              <v-card-text>
                Date de sortie : {{ idFilm.release_date }}
              </v-card-text>
              <v-card-text>{{ idFilm.overview }}</v-card-text>
              <v-card-actions>
                <v-btn @click="dialog = false">Fermer</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const favorites = ref([])
  const dialog = ref(false)
  const idFilm = ref('')
  const carteDejaGenere = ref(0)
  const searchQuery = ref('') // 🔍 champ de recherche

  // 🧠 Films filtrés selon la recherche
  const filteredFilms = computed(() => {
    if (!searchQuery.value) return store.films
    const query = searchQuery.value.toLowerCase()
    return store.films.filter(
      film =>
        (film.title && film.title.toLowerCase().includes(query)) ||
        (film.overview && film.overview.toLowerCase().includes(query))
    )
  })

  // prend l'ID du film sur lequel on clique
  function prendreIdFilm (id) {
    idFilm.value = id
  }

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
