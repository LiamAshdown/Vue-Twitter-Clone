<template>
  <div class="p-4">
    <div class="flex gap-4">
      <div>
        <img alt="Liam Ashdown" class="rounded-full" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
      </div>
      <div class="w-full">
        <textarea class="w-full dark:bg-black dark:text-gray-300 text-1xl" ref="input" placeholder="Whats happening?"></textarea>
        <div class="w-full border-t border-blue-400 text-right py-2">
          <div class="flex justify-end items-center gap-3">
            <div class="border-r border-blue-400 pr-4">
              <svg class="progress blue h-7" ref="progress" x="0px" y="0px" viewBox="0 0 80 80">
                <path class="track stroke-current text-gray-200 dark:text-gray-700" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
              </svg>
            </div>
            <base-button size="md">Tweet</base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetBox',
  mounted () {
    const max = -219.99078369140625
    this.$refs.input.addEventListener('input', event => {
      this.$refs.progress.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - event.target.value.length) / 100) * max)
    })
  }
}
</script>

<style scoped>
.progress .track, .progress .fill {
  fill: rgba(0, 0, 0, 0);
  stroke-width: 10;
  transform: rotate(90deg)translate(0px, -80px);
}

.progress .fill {
  stroke: rgb(255, 255, 255);
  stroke-dasharray: 219.99078369140625;
  stroke-dashoffset: -219.99078369140625;
  transition: stroke-dashoffset 1s;
}
.progress.blue .fill {
  stroke: rgb(96, 165, 250);
}
</style>
