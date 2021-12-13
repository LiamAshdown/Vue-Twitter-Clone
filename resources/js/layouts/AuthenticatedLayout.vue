<template>
  <div class="bg-white dark:bg-black">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-0">
        <div class="col-span-2 xl:col-span-3 md:border-r border-gray-700 bg-white dark:bg-black">
          <the-side-bar></the-side-bar>
        </div>
        <div class="col-span-9 xl:col-span-6 border-r border-gray-700">
          <main class="flex-grow min-h-screen">
            <slot></slot>
          </main>
        </div>
        <the-sign-up-footer-bar></the-sign-up-footer-bar>
        <the-bottom-bar class="md:hidden"></the-bottom-bar>
      </div>
    </div>
  </div>
</template>

<script>
import TheSideBar from '../components/partials/TheSideBar'
import TheBottomBar from '../components/partials/TheBottomBar'
import TheSignUpFooterBar from '../components/partials/TheSignUpFooterBar'

export default {
  name: 'AuthenticatedLayout',
  components: {
    TheSideBar,
    TheBottomBar,
    TheSignUpFooterBar
  }
}
</script>
