<template>
  <div class="font-bold text-2xl text-black dark:text-white p-4 border-b border-gray-500">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'TheTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
