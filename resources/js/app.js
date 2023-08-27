import './bootstrap'                                                            

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import App from './vue/app.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare)
library.add(faTrash)

const app = createApp({});

app.component('app', App);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");                                              