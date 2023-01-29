<script setup>
defineProps({
  src: String,
  alt: String
})
</script>

<template>
  <img
    class="Avatar h-10 w-10 rounded-full object-cover"
    :src="src"
    :alt="alt"
  />
</template>
