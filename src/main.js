import { createApp, nextTick } from 'vue'
import App from './App.vue'
import store from './store'
//import vueLodash from 'vue-lodash'
import lodash from 'lodash'
import './assets/styles/styles.scss'


createApp(App)
    .use(store)
    .use(lodash)
    .mount('#app')
