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
        <h1 class="text-h4 mb-2">{{ film.title }} {{ film }}</h1>

        <!-- Les types et stats seront ajoutés dans les chapitres suivants -->

        <p class="mt-6 text-body-1">{{ film.description }}</p>

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
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const filmStore = useAppStore()
  const film = filmStore.fetchFilms(route.params.id)
</script>
