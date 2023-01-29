<script setup>
import { Avatar, Text } from '$components/atomics'

import { NotificationBingIcon } from '$assets/icons/linear'

defineProps({
  title: String
})
</script>

<template>
  <nav class="Topbar mb-8 flex items-center justify-between">
    <!-- Heading -->
    <Text variant="h3" size="2xl" weight="bold">
      {{ title }}
    </Text>

    <div class="relative flex items-center gap-6">
      <!-- Notification -->
      <div class="relative">
        <div
          class="Tick absolute top-0 right-0.5 h-2 w-2 rounded-full bg-error-main"
        />

        <NotificationBingIcon class="h-6 w-6 stroke-[1.5px] text-netral-900" />
      </div>

      <!-- Avatar -->
      <Avatar src="/topbar-user-photo.png" alt="Topbar User Photo" />
    </div>
  </nav>
</template>
