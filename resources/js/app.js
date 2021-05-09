import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

// Tailwind CSS
import '../css/index.css'

// Base Components
import BaseButton from './components/ui/BaseButton'
import BaseInput from './components/ui/BaseInput'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)

app.use(router)
app.use(store)

app.mount('#app')
