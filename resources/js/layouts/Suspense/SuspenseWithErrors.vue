<template>
  <div>
  <slot name="error" :error="error" v-if="error" />
    <Suspense v-else>
        <template #default>
            <slot name="default" />
        </template>
        <template #fallback>
            <slot name="fallback" />
        </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from 'vue'

export default {
  name: 'SuspenseWithErrors',
  setup () {
    const error = ref(null)
    onErrorCaptured(error => (error.value = error))
    return { error }
  }
}
</script>
