<template>
  <div class="flex">
    <the-side-bar></the-side-bar>
    <main class="h-screen flex-grow bg-white dark:bg-black">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import TheSideBar from '../components/partials/TheSideBar'

export default {
  name: 'AuthenticatedLayout',
  components: {
    TheSideBar
  }
}
</script>
