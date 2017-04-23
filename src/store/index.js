import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
const state = {
    count: 123
}
export default new Vuex.Store({
    state
})