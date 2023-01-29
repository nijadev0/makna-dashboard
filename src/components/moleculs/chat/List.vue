<script setup>
import { Avatar, Text } from '$components/atomics'

defineProps({
  avatar: String,
  code: String,
  stamp: String,
  message: String,
  total: String
})
</script>

<template>
  <button
    class="Chat-List relative flex w-full items-center justify-between border-b border-netral-200 p-4 transition-colors duration-300 ease-in-out hover:bg-accent-surface/10"
  >
    <Avatar
      :src="avatar ?? '/topbar-user-photo.png'"
      :alt="code ?? 'Topbar User Photo'"
    />

    <!-- Text -->
    <div class="Text-Content w-full space-y-2 pl-3">
      <!-- Top -->
      <div class="flex items-center justify-between">
        <Text
          variant="h3"
          size="sm"
          weight="semibold"
          className="tracking-wide text-netral-900"
        >
          {{ code ?? '#122212' }}
        </Text>

        <p class="Date text-[13px] font-medium text-[#A0A8B0]">
          {{ stamp ?? '12 days ago' }}
        </p>
      </div>

      <!-- Bottom -->
      <div class="flex items-center justify-between">
        <Text
          variant="p"
          size="2xs"
          weight="regular"
          className="tracking-wide text-netral-700 w-48 line-clamp-2"
        >
          {{ message }}
        </Text>

        <div
          class="flex h-6 w-6 items-center justify-center rounded-full bg-accent-surface"
        >
          <Text
            variant="span"
            size="xs"
            weight="medium"
            className="text-netral-800"
          >
            {{ total }}
          </Text>
        </div>
      </div>
    </div>
  </button>
</template>
