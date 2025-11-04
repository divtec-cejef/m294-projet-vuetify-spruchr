<template>
  <v-card v-for="film in store.films" :key="film.id">
    <v-img>
      src="https://api.themoviedb.org/3/"
    </v-img>
    <v-card-title> {{ film.title }}</v-card-title>
    <v-card-text>{{ film.overview }}</v-card-text>
  </v-card>
</template>

<script setup>
  import { onMounted } from 'vue'
  import AppHeader from '@/components/AppHeader.vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()

  onMounted(() => {
    store.init()
    console.log('app mounted, store initialized')
  })


</script>
