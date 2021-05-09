<template>
  <div
    class="border border-gray-500 rounded border-opacity-50 px-2 focus-within:border-blue-400 relative"
    :class="{
      'w-full': block
    }">
      <span class="text-gray-500 absolute right-2 top-1 text-xs" v-if="max">{{ counter }} / {{ max }}</span>
      <div class="pt-3">
        <div
          class="absolute top-0 h-full transition-all"
          :class="{
            'pt-4 text-gray-500 text-lg': !focus,
            'pt-1 text-blue-400 text-sm': focus
          }"
        >
          <span
            class="text-opacity-50"
          >
            Name
          </span>
        </div>
      </div>
      <input type="text"
        ref="input"
        class="bg-transparent py-3 text-white focus:outline-none"
        :class="{
          'w-full': block
        }"
        v-bind="$attrs"
      />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    max: {
      type: Number,
      required: false,
      default: 50
    }
  },
  data () {
    return {
      focus: false,
      counter: 0
    }
  },
  mounted () {
    this.$refs.input.addEventListener('focus', () => {
      this.focus = true
    })

    this.$refs.input.addEventListener('blur', event => {
      this.focus = event.target.value.length > 0
    })

    this.$refs.input.addEventListener('input', event => {
      const length = event.target.value.length
      if (this.max && length > this.max) {
        this.counter = this.max
      } else {
        this.counter = length
      }
    })
  }
}
</script>
