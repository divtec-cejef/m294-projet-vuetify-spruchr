<template>
  <v-container v-if="film">
    <v-row class="align-start">
      <v-col cols="12" md="4">
        <v-img
          :alt="film.name"
          class="rounded"
          contain
          height="300"
          :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
        />
      </v-col>

      <v-col cols="12" md="8">
        <h1 class="text-h4 mb-2">{{ film.title }}</h1>

        <p> Date de sortie : {{film.release_date}}</p>

        <!-- Les types et stats seront ajoutés dans les chapitres suivants -->

        <p class="mt-6 text-body-1">{{ film.overview }}</p>

        <v-btn
          class="mt-8"
          color="primary"
          prepend-icon="mdi-arrow-left"
          to="/"
          variant="tonal"
        >
          Retour
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <v-alert class="text-center" type="error">
      film introuvable.
    </v-alert>
  </v-container>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const store = useAppStore()

  const film = ref(null) // variable réactive pour stocker le film

  onMounted(async () => {
    // on charge les films si nécessaire
    await store.init()

    // on cherche le film correspondant à l’ID de l’URL
    film.value = store.films.find(f => f.id === Number(route.params.id))

    if (!film.value) {
      console.error('Film introuvable pour ID :', route.params.id)
    }
  })
</script>

