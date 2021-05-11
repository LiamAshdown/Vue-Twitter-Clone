<template>
  <span class="text-red-500">{{ message }}</span>
</template>

<script>
import messages from '../../validations/validation'

export default {
  name: 'BaseInvalidInput',
  props: {
    validation: {
      required: false,
      default: null
    }
  },
  computed: {
    message () {
      if (!this.validation) {
        return ''
      }

      if (this.validation.serverError && this.validation.$errors.length === 0) {
        return this.validation.serverError
      }

      if (this.validation.$errors.length === 0) {
        return ''
      }

      const error = this.validation.$errors[0]

      const errorMessage = messages[error.$validator]

      return errorMessage.replace(':attribute', error.$property)
    }
  }
}
</script>
