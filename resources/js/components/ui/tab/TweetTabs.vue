<template>
  <div>
    <nav class="flex justify-between text-white border-b border-gray-500">
      <div
      v-for='(tab, index) in tabs'
      :key='tab.props.title'
      @click='selectTab(index)'
      class="py-1 px-3 font-bold lg:py-3 lg:px-10 text-gray-400 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 hover:text-blue-400"
      >
      {{ tab.props.title }}
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
import { reactive, provide, onMounted, onBeforeMount, toRefs } from 'vue'

export default {
  name: 'TweetTabs',
  setup (_, { slots }) {
    const state = reactive({
      selectedIndex: 0,
      tabs: [],
      count: 0
    })

    provide('TabsProvider', state)

    const selectTab = (i) => {
      state.selectedIndex = i
    }

    onBeforeMount(() => {
      if (slots.default) {
        state.tabs = slots.default()
      }
    })

    onMounted(() => {
      selectTab(0)
    })

    return { ...toRefs(state), selectTab }
  }
}
</script>
