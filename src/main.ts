import './main.scss'
import { createBaloiseDesignSystem } from '@baloise/design-system-components-vue'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(
    createBaloiseDesignSystem({
      defaults: {
        region: 'CH',
        language: 'en',
        allowedLanguages: ['de', 'fr', 'it', 'en'],
      },
    }),
  )
  .mount('#app')