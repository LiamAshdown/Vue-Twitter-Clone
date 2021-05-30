import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import Modal from './plugins/modal'
import ServerValidation from './plugins/serverValidation'

// Tailwind CSS
import '../css/index.css'

// Base Components
import BaseButton from './components/ui/BaseButton'
import BaseInput from './components/ui/BaseInput'
import BaseSelect from './components/ui/BaseSelect'
import BaseLogo from './components/ui/BaseLogo'
import TweetTab from './components/ui/tab/TweetTab'
import TweetTabs from './components/ui/tab/TweetTabs'
import BaseInvalidFeedback from './components/ui/BaseInvalidFeedback'

// Custom Icons
import LoadingIcon from './components/icons/LoadingIcon'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)
app.component('base-select', BaseSelect)
app.component('base-logo', BaseLogo)
app.component('tweet-tab', TweetTab)
app.component('tweet-tabs', TweetTabs)
app.component('base-invalid-feedback', BaseInvalidFeedback)

// Custom Icons
app.component('loading-icon', LoadingIcon)

app.use(router)
app.use(store)
app.use(Modal)
app.use(ServerValidation)

app.mount('#app')
