<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
import { watch, inject, ref, onBeforeMount } from 'vue'

export default {
  name: 'TweetTab',
  setup () {
    const index = ref(0)
    const isActive = ref(true)

    const tabs = inject('TabsProvider')

    watch(
      () => tabs.selectedIndex,
      () => {
        isActive.value = index.value === tabs.selectedIndex
      }
    )

    onBeforeMount(() => {
      index.value = tabs.count
      tabs.count++
      isActive.value = index.value === tabs.selectedIndex
    })

    return { index, isActive }
  }
}
</script>
