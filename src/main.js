import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/tiptap-vuetify'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import moment from 'moment'

Vue.component('vueInternetChecker', require('vue-internet-checker'));

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
});
Amplify.configure(aws_exports);

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')