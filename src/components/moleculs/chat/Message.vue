<script setup>
import { Avatar, Text } from '$components/atomics'

defineProps({
  variant: String,
  message: String,
  date: String
})
</script>

<template>
  <!-- Chat: Incoming -->
  <div
    v-if="variant === 'incoming'"
    class="Chat-Incoming flex w-full items-start justify-start"
  >
    <div class="flex w-80 items-start gap-4 2xl:w-96">
      <!-- Avatar -->
      <Avatar src="/topbar-user-photo.png" alt="User Photo" />

      <!-- Text -->
      <div class="flex flex-col items-start gap-1.5">
        <div class="w-fit rounded-large rounded-tl-none bg-white px-4 py-3">
          <Text variant="p" size="sm" weight="regular">
            {{ message }}
          </Text>
        </div>

        <Text
          variant="span"
          size="xs"
          weight="regular"
          className="text-netral-900"
        >
          {{ date }}
        </Text>
      </div>
    </div>
  </div>

  <!-- Chat: Outgoing -->
  <div
    v-if="variant === 'outgoing'"
    class="Chat-Outgoing flex w-full items-end justify-end"
  >
    <div class="flex w-80 items-start justify-end gap-4 2xl:w-96">
      <div class="flex flex-col items-end gap-1.5">
        <div
          class="w-fit rounded-large rounded-tr-none bg-accent-surface/25 px-4 py-3"
        >
          <Text variant="p" size="sm" weight="regular">
            {{ message }}
          </Text>
        </div>
        <Text
          variant="span"
          size="xs"
          weight="regular"
          className="text-netral-900"
        >
          {{ date }}
        </Text>
      </div>

      <!-- Avatar -->
      <Avatar src="/topbar-user-photo.png" alt="User Photo" />
    </div>
  </div>
</template>
