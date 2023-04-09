import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'

import './assets/main.css'

//UI components
import BaseButton from './components/UI/BaseButton.vue'
import BaseBadge from './components/UI/BaseBadge.vue'
import ColorGradient from './components/UI/ColorGradient.vue'
import BaseModal from './components/UI/BaseModal.vue'

const app = createApp(App)

app.use(createPinia())

app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge)
app.component('ColorGradient', ColorGradient)
app.component('BaseModal', BaseModal)

//ant design imports
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

app.use(Antd)

app.mount('#app')
