// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './lib/Api'
import configDB from '../config/database'

Vue.config.productionTip = false

/* eslint-disable no-new */
function setupApp () {
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
}

Api.init(configDB.apiKey, configDB.authDomain, configDB.databaseName).then(setupApp)
