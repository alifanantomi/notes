import Vue from 'vue'
import Vuex from 'vuex'

import modules from '@/store/modules/index'

const debug = process.env.NODE_ENV == 'production';

Vue.use(Vuex)

const store = () => { 
  return new Vuex.Store({
    modules,
    strict: debug
  })
}

export default store