<template>
  <button
    class="rounded-full text-white font-bold transition transition-background-color duration-500 ease-out"
    :class="{
      'bg-blue-400 hover:bg-blue-500': variant === 'primary' && !outline,
      'bg-transparent border': outline,
      'border-2 border-blue-400 bg-blue-400 bg-opacity-0': variant === 'primary' && outline,
      'hover:bg-opacity-10': outline,
      'w-full': block,
      'standard': 'py-3 px-6',
      'py-1 px-4': size === 'sm'
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'standard'
    }
  }
}
</script>
