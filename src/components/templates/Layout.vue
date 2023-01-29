<script setup>
import Sidebar from '$components/organisms/Sidebar.vue'

import { Topbar } from '$components/organisms'

const { title } = defineProps({
  title: String
})
</script>

<template>
  <!-- Layout -->
  <div class="Layout relative">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Content -->
    <main class="Main relative z-0 ml-64 min-h-screen px-8 py-6 2xl:ml-72">
      <!-- Topbar -->
      <Topbar :title="title" />

      <section class="Makna relative rounded-3xl">
        <slot />
      </section>
    </main>
  </div>
</template>
