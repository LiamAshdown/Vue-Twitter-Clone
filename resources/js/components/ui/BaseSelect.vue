<template>
  <div>
    <div
      class="border border-gray-500 rounded border-opacity-50 px-2 relative transition-all"
      :class="{
        'w-full': block,
        'focus-within:border-blue-400': !validation.$error,
        'border-red-500': validation.$error
      }"
      v-bind="$attrs"
      >
      <div class="pt-3 pointer-events-none">
        <div
          class="absolute top-0 h-full transition-all"
          :class="labelStyle"
        >
          <label
            :label-for="id"
            class="text-opacity-50"
          >
            {{ placeholder }}
          </label>
        </div>
      </div>
      <select
        ref="select"
        class="appearance-none w-full focus:outline-none cursor-pointer bg-white dark:bg-black text-black dark:text-white mt-4 mb-2"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="validation.$touch"
        >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
      <ChevronDownIcon
      class="h-7 w-7 absolute top-2/4 transform -translate-y-1/2 right-2 pointer-events-none"
      :class="{
        'text-gray-500': !focus,
        'text-blue-500': focus
      }"
      />
    </div>
    <base-invalid-feedback :validation="validation"></base-invalid-feedback>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/solid'

export default {
  name: 'BaseSelect',
  components: {
    ChevronDownIcon
  },
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: [Array, String, Number, undefined]
    },
    options: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    validation: {
      type: String,
      required: false,
      default: null
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    labelStyle () {
      if (!this.focus && !this.modelValue) {
        return `pt-2 text-sm ${!this.validation.$error ? 'text-gray-500' : 'text-red-500'}`
      }

      if (this.focus) {
        return `pt-2 text-sm ${!this.validation.$error ? 'text-blue-500' : 'text-red-500'}`
      }

      if (this.modelValue) {
        return `pt-2 text-sm ${!this.validation.$error ? 'text-gray-500' : 'text-red-500'}`
      }

      return ''
    }
  },
  mounted () {
    this.$refs.select.addEventListener('focus', () => {
      this.focus = true
    })

    this.$refs.select.addEventListener('blur', event => {
      this.focus = false
    })
  }
}
</script>
