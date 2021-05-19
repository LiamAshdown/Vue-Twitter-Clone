<template>
<div class="bg-white dark:bg-black">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
      <div class="col-span-2 xl:col-span-3 md:border-r border-gray-700">
        <the-side-bar></the-side-bar>
        <the-bottom-bar class="md:hidden"></the-bottom-bar>
      </div>
      <div class="col-span-9 xl:col-span-5 border-r border-gray-700">
        <main class="h-screen flex-grow">
          <slot></slot>
        </main>
      </div>
      <div class="hidden xl:block xl:col-span-4">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import TheSideBar from '../components/partials/TheSideBar'
import TheBottomBar from '../components/partials/TheBottomBar'

export default {
  name: 'AuthenticatedLayout',
  components: {
    TheSideBar,
    TheBottomBar
  }
}
</script>
