<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      id: -1,
      name: 'Unknown',
      image: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink :to="`/character/${props.character.id}`" class="rounded-lg bg-teal-300 shadow-lg shadow-lime-500">
    <img class="w-full rounded-t-lg object-cover" :src="props.character.image" />
    <div class="p-4">
      <h2 class="text-center text-2xl font-semibold text-gray-800">
        {{ props.character.name }}
      </h2>
    </div>
  </RouterLink>
</template>
