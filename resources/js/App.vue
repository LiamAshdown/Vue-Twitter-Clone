<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // This is for testing purposes at the moment
    this.$store.dispatch('setTheme', {
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    })
  }
}
</script>
