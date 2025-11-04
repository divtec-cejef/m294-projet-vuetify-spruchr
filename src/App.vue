<template>
  <v-app>
    <router-view />
    <AppHeader />
  </v-app>
</template>

<script setup>
  //
  import { onMounted } from 'vue'
  import { useAppStore } from '@/stores/app.js'
  import AppHeader from "@/components/AppHeader.vue";

  const store = useAppStore()

  onMounted(() => {
    store.init()
    console.log('App monté, store initialisé')
  })
</script>
