<script setup>
import { Avatar, Text } from '$components/atomics'

import { CloseCircleIcon, InfoCircleIcon } from '$assets/icons/linear'

defineProps({
  code: String,
  name: String,
  phone: String,
  openDetail: Function,
  closeChat: Function
})
</script>

<template>
  <section class="Profile relative flex w-full items-center justify-between">
    <div class="flex items-center gap-3">
      <Avatar src="/topbar-user-photo.png" alt="Topbar User Photo" />

      <!-- Text -->
      <div class="Text-Content space-y-0.5">
        <Text
          variant="h3"
          size="sm"
          weight="semibold"
          className="text-left tracking-wide"
        >
          {{ code ?? '#122212' }}
        </Text>

        <Text
          variant="p"
          size="2xs"
          weight="normal"
          className="text-left text-netral-600 tracking-wide"
        >
          {{ `${name}, ${phone}` }}
        </Text>
      </div>
    </div>

    <div class="Actions flex gap-4 text-[#292D32]">
      <button @click="closeChat">
        <CloseCircleIcon class="h-6 w-6 stroke-[1.5px]" />
      </button>

      <button @click="openDetail">
        <InfoCircleIcon class="h-6 w-6 stroke-[1.5px]" />
      </button>
    </div>
  </section>
</template>
