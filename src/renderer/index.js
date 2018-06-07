import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Vuefire from 'vuefire'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
 
Vue.use(Vuefire);
Vue.use(Vuetify);
new Vue({
    el: "#app",
    render(h){
        return h(App)
    }
})