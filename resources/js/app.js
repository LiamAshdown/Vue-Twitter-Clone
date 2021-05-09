import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import Modal from './plugins/modal'

// Tailwind CSS
import '../css/index.css'

// Base Components
import BaseButton from './components/ui/BaseButton'
import BaseInput from './components/ui/BaseInput'
import BaseSelect from './components/ui/BaseSelect'
import BaseLogo from './components/ui/BaseLogo'
import BaseInvalidFeedback from './components/ui/BaseInvalidFeedback'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-select', BaseSelect)
app.component('base-logo', BaseLogo)
app.component('base-invalid-feedback', BaseInvalidFeedback)

app.use(router)
app.use(store)
app.use(Modal)

app.mount('#app')
