<template>
  <span class="text-red-500">{{ message }}</span>
</template>

<script>
import messages from '../../validations/validation'

export default {
  name: 'BaseInvalidInput',
  props: {
    validation: {
      type: Object,
      required: true
    }
  },
  computed: {
    message () {
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
