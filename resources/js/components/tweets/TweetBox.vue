<template>
  <div class="transition-all">
    <div class="flex gap-4 p-4 transition-all">
      <div>
        <img alt="Liam Ashdown" class="rounded-full" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png">
      </div>
      <div class="w-full">
        <textarea class="w-full dark:bg-black dark:text-gray-300 text-1xl" ref="input" placeholder="Whats happening?" @input="debounceInput" v-model="tweet"></textarea>
        <div class="w-full border-t border-blue-400 text-right py-2 overflow-hidden">
          <div class="flex justify-end items-center gap-3">
            <div class="border-r border-blue-400 pr-4 overflow-hidden" v-if="canTweet">
              <svg class="progress blue h-7" ref="progress" x="0px" y="0px" viewBox="0 0 80 80"
              :class="{
                'orange': characterCounter > 235 && characterCounter < 255,
                'red' : characterCounter >= 265
              }"
              >
                <path class="track stroke-current text-gray-200 dark:text-gray-700" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0"/>
                <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
              </svg>
            </div>
            <base-button size="md" :disabled="!canTweet" @click="sendTweet">Tweet</base-button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-4 w-full bg-gray-900 border-t border-b border-gray-600"></div>
  </div>
</template>

<script>
import { debounce } from 'debounce'

export default {
  name: 'TweetBox',
  data () {
    return {
      characterCounter: 0,
      tweet: '',
      loading: false
    }
  },
  computed: {
    canTweet () {
      return this.tweet.trim().length > 0
    }
  },
  methods: {
    debounceInput: debounce(function (event) {
      // TODO; Remove characterCounter and use tweet property
      this.characterCounter = event.target.value.length
      if (this.characterCounter <= 255) {
        this.$refs.progress.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + (((100 - this.characterCounter / 2.55) / 100) * 1) * -219.99078369140625)
      }
    }, 50),
    sendTweet () {
      this.loading = true

      this.$store.dispatch('tweets/add', {
        tweet: this.tweet
      }).then(() => {
        this.tweet = ''
        this.characterCounter = 0
        this.loading = false
      })
    }
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

.progress.orange .fill {
  stroke:rgb(247, 114, 38);
}

.progress.red .fill {
  stroke:rgb(240, 13, 13);
}

.progress.hidden .fill {
  stroke: transparent;
}
</style>
