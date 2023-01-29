<script setup>
import MainMenu from './sidebar/Main.vue'
import UserMenu from './sidebar/User.vue'

import { Text } from '$components/atomics'

import {
  ShopIcon,
  ArrowDownIcon,
  ArrowSwapHorizontalIcon
} from '$assets/icons/linear'
</script>

<template>
  <aside
    class="Sidebar fixed top-0 left-0 z-50 h-full w-64 bg-primary-main 2xl:w-72"
  >
    <div class="relative text-white">
      <!-- Collapse Sidebar -->
      <div
        class="absolute top-4 -right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8EBF1] bg-white shadow-sm"
      >
        <ArrowSwapHorizontalIcon
          class="ArrowSwapHorizontal-Icon h-6 w-6 stroke-[1.5px] text-[#101623]"
        />
      </div>

      <!-- Main -->
      <div class="h-screen overflow-y-scroll px-4 py-6">
        <!-- Logo -->
        <img
          class="relative mb-12 h-6 w-auto"
          src="/makna-ai-logo.png"
          alt="Makna.ai White Logo"
        />

        <!-- Store & Menus -->
        <button
          class="mb-10 flex w-full items-center justify-between rounded-xl bg-white/10 p-3 transition-colors duration-500 ease-in-out hover:bg-white/25"
        >
          <!-- Icon & Text -->
          <div class="flex items-center gap-3">
            <!-- Icon -->
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#6DC7FF]"
            >
              <ShopIcon
                class="Shop-Icon h-6 w-6 stroke-[1.5px] text-[#101623]"
              />
            </div>

            <!-- Text -->
            <div class="flex flex-col items-start space-y-1 text-white">
              <Text variant="h3" size="base" weight="semibold">
                Uno Music
              </Text>

              <Text
                variant="span"
                size="xs"
                weight="regular"
                className="text-netral-400"
              >
                Rp 497.800
              </Text>
            </div>
          </div>

          <!-- Icon: Arrow Down -->
          <ArrowDownIcon
            class="ArrowDown-Icon h-5 w-5 stroke-[1.5px] text-white"
          />
        </button>

        <!-- Main Menu -->
        <div class="mb-6">
          <MainMenu />
        </div>

        <!-- User Management -->
        <div class="mb-6">
          <UserMenu />
        </div>
      </div>
    </div>
  </aside>
</template>
