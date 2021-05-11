<template>
  <div
    v-bind="$attrs"
  >
    <div
      class="border-2 border-gray-500 rounded border-opacity-50 px-2 relative transition-all"
      :class="{
        'w-full': block,
        'focus-within:border-blue-400': !hasError(),
        'border-red-500': hasError()
      }"
      >
        <span class="text-gray-500 absolute right-2 top-1 text-xs" v-if="max > 0">{{ counter }} / {{ max }}</span>
        <div class="pt-3">
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
        <input
          ref="input"
          :type="type"
          class="bg-transparent py-3 text-black dark:text-white focus:outline-none h-3.5 mt-3 mb-1"
          :class="{
            'w-full': block
          }"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :maxlength="max"
          :autocapitalize="autocapitalize"
          :autocomplete="autocomplete"
          :autocorrect="autocorrect"
          :id="id"
          :aria-label="id"
          :aria-describedby="id + '-addon'"
          @blur="validation ? validation.$touch : null"
        />
    </div>
    <base-invalid-feedback :validation="validation"></base-invalid-feedback>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: [Array, String, Number, undefined]
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
    max: {
      type: String,
      required: false,
      default: '-1'
    },
    autocapitalize: {
      type: String,
      required: false
    },
    autocorrect: {
      type: String,
      required: false
    },
    autocomplete: {
      type: String,
      required: false
    },
    validation: {
      required: false,
      default: null
    }
  },
  data () {
    return {
      focus: false,
      counter: 0
    }
  },
  computed: {
    labelStyle () {
      if (!this.focus && !this.modelValue) {
        return `pt-3 text-lg ${!this.hasError() ? 'text-gray-500' : 'text-red-500'}`
      }

      if (this.focus) {
        return `pt-2 text-sm ${!this.hasError() ? 'text-blue-500' : 'text-red-500'}`
      }

      if (this.modelValue) {
        return `pt-2 text-sm ${!this.hasError() ? 'text-gray-500' : 'text-red-500'}`
      }

      return ''
    }
  },
  methods: {
    hasError () {
      if (this.validation) {
        return this.validation.$error && this.validation.serverError
      }

      return false
    }
  },
  mounted () {
    this.$refs.input.addEventListener('focus', () => {
      this.focus = true
    })

    this.$refs.input.addEventListener('blur', event => {
      this.focus = false
    })

    this.$refs.input.addEventListener('input', event => {
      const length = event.target.value.length
      if (this.max > 0 && length > this.max) {
        this.counter = this.max
      } else {
        this.counter = length
      }
    })
  }
}
</script>
