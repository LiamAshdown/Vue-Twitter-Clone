<template>
  <div class="fixed inset-0 w-full h-screen z-50 flex items-center justify-center bg-gray-400 bg-opacity-25" v-if="active">
    <div class="w-full h-screen md:h-auto max-w-2xl bg-white dark:bg-black shadow-lg md:rounded-lg p-4">
      <div class="relative">
        <base-logo class="h-7 pr-5 relative inline-block left-2/4 transform -translate-x-2/4"></base-logo>
      </div>
      <div class="px-4 md:px-8 mt-8 mb-4">
        <p class="font-bold text-black dark:text-white text-2xl pb-6">Create your account</p>
        <form @submit.prevent="handleSubmit">
          <base-input id="name" class="mb-4" max="50" v-model="form.name" placeholder="Name" :validation="v$.form.name" block></base-input>
          <base-input id="username" class="mb-4" max="30" v-model="form.username" placeholder="Username" :validation="v$.form.username" block></base-input>
          <base-input id="email" class="mb-4" v-model="form.email" placeholder="Email" :validation="v$.form.email" block></base-input>
          <base-input id="password" type="password" v-model="form.password" placeholder="Password" :validation="v$.form.password" block></base-input>
          <p class="text-black dark:text-white font-bold mt-10">Date of birth</p>
          <p class="text-gray-400">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          <div class="grid grid-cols-12 gap-3 mt-3">
            <div class="col-span-6">
              <base-select v-model="form.month" placeholder="Month" :options="monthOptions" :validation="v$.form.month"></base-select>
            </div>
            <div class="col-span-3">
              <base-select v-model="form.day" placeholder="Day" :options="dayOptions" :validation="v$.form.day"></base-select>
            </div>
            <div class="col-span-3">
              <base-select v-model="form.year" placeholder="Year" :options="yearOptions" :validation="v$.form.year"></base-select>
            </div>
          </div>
          <div class="text-center mt-8">
            <base-button :disabled="isDisabled" block>Sign Up</base-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'SignUpModal',
  setup () {
    return { v$: useVuelidate() }
  },
  props: {
    id: {
      type: String,
      required: false,
      default: 'sign-up-modal'
    }
  },
  data () {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        day: '',
        month: '',
        year: ''
      },
      monthOptions: [
        { label: 'Janurary', value: '1' },
        { label: 'Feburary', value: '2' },
        { label: 'March', value: '3' },
        { label: 'April', value: '4' },
        { label: 'May', value: '5' },
        { label: 'June', value: '6' },
        { label: 'July', value: '7' },
        { label: 'August', value: '8' },
        { label: 'September', value: '9' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' }
      ],
      dayOptions: [],
      yearOptions: []
    }
  },
  validations () {
    return {
      form: {
        name: { required },
        email: { required, email },
        password: { required },
        day: { required },
        month: { required },
        year: { required }
      }
    }
  },
  computed: {
    active () {
      return this.$store.getters['modals/active'] === this.id
    },
    isDisabled () {
      if (this.v$.$invalid) {
        return true
      }

      return false
    }
  },
  methods: {
    async handleSubmit () {
      this.v$.$reset()
      this.$serverValidation.reset(this.v$.form)

      try {
        await this.$store.dispatch('register', this.form)
        this.$modal.close('sign-up-modal')
        this.$router.push({ name: 'Home' })
      } catch (err) {
        this.$serverValidation.parse(err.response.data.errors, this.v$.form)
      }
    }
  },
  mounted () {
    // TODO; A better solutions needs to be made
    for (let i = 1900; i < new Date().getFullYear() + 1; i++) {
      this.yearOptions.unshift({
        label: i,
        value: i
      })
    }

    // TODO; Logic is needed as there different max days for each month
    for (let i = 1; i < 28; i++) {
      this.dayOptions.push({
        label: i,
        value: i
      })
    }
  }
}
</script>
