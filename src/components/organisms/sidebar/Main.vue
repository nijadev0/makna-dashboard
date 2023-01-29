<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

import { Text } from '$components/atomics'

import {
  ArrowDownIcon,
  Home2Icon,
  GraphIcon,
  MessageTextIcon,
  Messages3Icon,
  DeviceMessageIcon,
  TagRightIcon,
  NotificationIcon,
  Setting2Icon
} from '$assets/icons/linear'

const sideMenuMainRef = ref(true)

function toggleSideMenuMain() {
  sideMenuMainRef.value = !sideMenuMainRef.value
}
</script>

<template>
  <!-- Menus: Button -->
  <button @click="toggleSideMenuMain" class="mb-3 flex items-center gap-2.5">
    <!-- Icon: Arrow Down -->
    <ArrowDownIcon
      class="ArrowDown-Icon h-3.5 w-3.5 stroke-[1.5px] text-white"
      :class="!sideMenuMainRef && '-rotate-90 transform'"
    />

    <!-- Text -->
    <Text variant="p" size="sm" weight="semibold"> Main Menu </Text>
  </button>

  <!-- Menus: Items -->
  <div v-if="sideMenuMainRef" class="flex flex-col gap-2 pl-2">
    <RouterView>
      <RouterLink
        to="/"
        class="flex items-center gap-4 rounded-full py-2.5 px-4 transition-colors duration-500 ease-in-out"
      >
        <!-- Icon -->
        <Home2Icon class="Home2-Icon h-5 w-5 stroke-[1.5px] text-netral-400" />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Dashboard
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <GraphIcon class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400" />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Reports
        </Text>

        <ArrowDownIcon
          class="ArrowDown-Icon absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 stroke-[1.5px] text-white"
        />
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/conversations"
      >
        <!-- Icon -->
        <MessageTextIcon
          class="Home-2-Icon text-primary-900 h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Conversations
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/broadcast-templates"
      >
        <!-- Icon -->
        <Messages3Icon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Broadcast Templates
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <DeviceMessageIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Quick Replies
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <TagRightIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400"> Labels </span>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/notifications"
      >
        <!-- Icon -->
        <NotificationIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Notification
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <Setting2Icon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Settings
        </Text>
      </RouterLink>
    </RouterView>
  </div>
</template>

<style lang="postcss">
.router-link-active.router-link-exact-active.Button {
  @apply bg-accent-surface/10;
}

.router-link-active.router-link-exact-active.Button svg {
  @apply fill-accent-surface/25;
}

.router-link-active.router-link-exact-active.Button span {
  @apply text-accent-surface;
}
</style>
