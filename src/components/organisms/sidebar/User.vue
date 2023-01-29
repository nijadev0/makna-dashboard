<script setup>
import { ref } from 'vue'

import {
  ArrowDownIcon,
  UserSquareIcon,
  ProfileIcon,
  Profile2Icon,
  AirdropIcon,
  HeadphoneIcon
} from '$assets/icons/linear'
import { Text } from '$components/atomics'

const sideMenuUserRef = ref(true)

function toggleSideMenuUser() {
  sideMenuUserRef.value = !sideMenuUserRef.value
}
</script>

<template>
  <!-- User Management Menu -->
  <div class="mb-6">
    <!-- Menus: Button -->
    <button @click="toggleSideMenuUser" class="mb-3 flex items-center gap-2.5">
      <!-- Icon: Arrow Down -->
      <ArrowDownIcon
        class="ArrowDown-Icon h-3.5 w-3.5 stroke-[1.5px] text-white"
        :class="!sideMenuUserRef && '-rotate-90 transform'"
      />

      <!-- Text -->
      <Text variant="span" size="sm" weight="semibold"> User Management </Text>
    </button>

    <!-- Menus: User Main -->
    <div
      v-if="sideMenuUserRef"
      class="Menus-Users Menus-Items flex flex-col gap-2 pl-2"
    >
      <RouterLink
        class="Button flex items-center gap-4 rounded-full py-2.5 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <UserSquareIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Users
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <Profile2Icon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Groups
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <ProfileIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400"> Users </span>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <AirdropIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Channels
        </Text>
      </RouterLink>

      <RouterLink
        class="relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <HeadphoneIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <Text
          variant="span"
          size="sm"
          weight="semibold"
          className="text-netral-400"
        >
          Agents
        </Text>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="postcss">
.router-link-active.router-link-exact-active {
  @apply bg-accent-surface/10;
}

.router-link-active.router-link-exact-active svg {
  @apply fill-accent-surface/25;
}

.router-link-active.router-link-exact-active span {
  @apply text-accent-surface;
}
</style>
