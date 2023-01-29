<script setup>
defineProps({
  variant: String,
  size: String,
  weight: String,
  className: String
})
</script>

<template>
  <h3
    v-if="variant === 'h3'"
    class="Text"
    :class="{
      '2XL text-2xl leading-8': size === '2xl',
      'XL text-xl leading-7': size === 'xl',
      'LG text-lg leading-7': size === 'lg',
      'Base text-base leading-6': size === 'base',
      'SM text-sm leading-5': size === 'sm',
      '2XS text-[13px] leading-5': size === '2xs',
      'XS text-xs leading-4': size === 'xs',
      'Bold font-bold': weight === 'bold',
      'Semibold font-semibold': weight === 'semibold',
      'Medium font-medium': weight === 'medium',
      'Regular font-normal': weight === 'regular'
    }"
    v-bind:class="className"
  >
    <slot />
  </h3>

  <p
    v-if="variant === 'p'"
    class="Text"
    :class="{
      '2XL text-2xl leading-8': size === '2xl',
      'XL text-xl leading-7': size === 'xl',
      'LG text-lg leading-7': size === 'lg',
      'Base text-base leading-6': size === 'base',
      'SM text-sm leading-5': size === 'sm',
      '2XS text-[13px] leading-5': size === '2xs',
      'XS text-xs leading-4': size === 'xs',
      'Bold font-bold': weight === 'bold',
      'Semibold font-semibold': weight === 'semibold',
      'Medium font-medium': weight === 'medium',
      'Regular font-normal': weight === 'regular'
    }"
    v-bind:class="className"
  >
    <slot />
  </p>

  <span
    v-if="variant === 'span'"
    class="Text"
    :class="{
      '2XL text-2xl leading-8': size === '2xl',
      'XL text-xl leading-7': size === 'xl',
      'LG text-lg leading-7': size === 'lg',
      'Base text-base leading-6': size === 'base',
      'SM text-sm leading-5': size === 'sm',
      '2XS text-[13px] leading-5': size === '2xs',
      'XS text-xs leading-4': size === 'xs',
      'Bold font-bold': weight === 'bold',
      'Semibold font-semibold': weight === 'semibold',
      'Medium font-medium': weight === 'medium',
      'Regular font-normal': weight === 'regular'
    }"
    v-bind:class="className"
  >
    <slot />
  </span>
</template>
