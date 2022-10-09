<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()
onMounted(async () => {
  await fetchCharacter(route.params.id)
})
onUnmounted(() => {
  currentCharacter.value = null
})
</script>

<template>
  <main class="min-h-screen bg-gray-900 py-7 text-white">
    <div v-if="currentCharacter" class="flex flex-col items-center justify-center gap-5">
      <img :src="currentCharacter.image" :alt="currentCharacter.name" />
      <h1 class="font-serif text-6xl font-thin text-green-500">Hi, I'm {{ currentCharacter.name }}</h1>
    </div>
  </main>
</template>
