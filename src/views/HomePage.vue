<script setup>
import { onMounted } from 'vue'
import BaseCard from '@/components/BaseCard.vue'
import useCharacters from '@/composables/useCharacters'

const { character, fetchCharacters, firstLoad } = useCharacters()

onMounted(async () => {
  if (firstLoad.value) {
    await fetchCharacters()
    firstLoad.value = false
  }
})
</script>

<template>
  <button
    title="Load Characters"
    class="z-90 fixed bottom-5 right-3 flex h-16 w-16 flex-auto items-center justify-center rounded-full bg-fuchsia-400 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-fuchsia-500 hover:drop-shadow-2xl"
    @click="fetchCharacters"
  >
    🔫
  </button>

  <main class="min-h-screen bg-gray-900">
    <div class="container mx-auto grid grid-cols-5 gap-6 py-9">
      <BaseCard v-for="character in character" :key="character.id" :character="character" />
    </div>
  </main>
</template>
